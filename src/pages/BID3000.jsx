import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {Tab, Tabs} from "@heroui/tabs";
import { Image } from "@heroui/image";
import {useNavigate} from "react-router-dom";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {Code, Spacer} from "@heroui/react";
import CodeBlock from "../components/CodeBlock";
import React, {useEffect, useState} from "react";
import { IpynbRenderer } from "react-ipynb-renderer";
import 'react-ipynb-renderer/dist/styles/monokai.css';


const BID3000 = () => {
    const [notebook, setNotebook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

useEffect(() => {
    const url = 'https://raw.githubusercontent.com/Scandiking/BID3000-Business-Intelligence/main/Analytics/BID3000.ipynb'

    fetch(url)
        .then(res => {
            console.log('Status:', res.status);
            return res.json(); // See raw response
        })
        .then(data => {
            if (!data.cells) throw new Error('Invalid notebook format');
            setNotebook(data);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));

}, []);


const schema_creation_sql = `
DROP SCHEMA IF EXISTS bid3000_eksamen CASCADE;
CREATE SCHEMA bid3000_eksamen;
SET search_path TO bid3000_eksamen;

-- Dimension Tables
CREATE TABLE dimcustomer (
    customerid BIGINT PRIMARY KEY,
    customername VARCHAR(100)
);

CREATE TABLE dimproduct (
    productid SERIAL PRIMARY KEY,
    stockcode VARCHAR(20),
    description VARCHAR(255),
    price DECIMAL(10,2),
    is_shipping BOOLEAN DEFAULT FALSE,
\teffective_date DATE DEFAULT CURRENT_DATE,
\tend_date DATE DEFAULT NULL,
\tis_current BOOLEAN DEFAULT TRUE
\t
);

CREATE TABLE dimdate (
    dateid SERIAL PRIMARY KEY,
    date DATE,
    year INT,
    month INT,
    day INT,
    quarter INT,
    dayofweek VARCHAR(10)
);

CREATE TABLE dimcountry (
    countryid SERIAL PRIMARY KEY,
    countryname VARCHAR(100)
);

-- Fact Tables
CREATE TABLE factsales (
    salesid SERIAL PRIMARY KEY,
    dateid_fk INT NOT NULL,
    customerid_fk INT NOT NULL,
    productid_fk INT NOT NULL,
    countryid_fk INT NOT NULL,
    quantity INT,
    unitprice DECIMAL(10, 2),
    revenue DECIMAL(15, 2),
    FOREIGN KEY (dateid_fk) REFERENCES dimdate(dateid),
    FOREIGN KEY (customerid_fk) REFERENCES dimcustomer(customerid),
    FOREIGN KEY (productid_fk) REFERENCES dimproduct(productid),
    FOREIGN KEY (countryid_fk) REFERENCES dimcountry(countryid)
);

CREATE TABLE factcancellations (
    cancellationid SERIAL PRIMARY KEY,
    dateid_fk INT NOT NULL,
    customerid_fk INT NOT NULL,
    productid_fk INT NOT NULL,
    countryid_fk INT NOT NULL,
    quantity_cancelled INT,
    revenue_lost DECIMAL(15, 2),
    FOREIGN KEY (dateid_fk) REFERENCES dimdate(dateid),
    FOREIGN KEY (customerid_fk) REFERENCES dimcustomer(customerid),
    FOREIGN KEY (productid_fk) REFERENCES dimproduct(productid),
    FOREIGN KEY (countryid_fk) REFERENCES dimcountry(countryid)
);
`

const queries_sql = `
-- ===============
-- If there is not, set the search path to the database.
SET search_path TO bid3000_eksamen;
-- ===============


-- Query 1 - Time based analysis
-- Year over year quarterly comparison by country

-- Makes it possible to compare performance across years by quarter for each country
-- using LAG with PARTITION BY 

WITH base AS (
  SELECT
    c.countryid,
    c.countryname,
    d.year,
    CASE
      WHEN d.month BETWEEN 1 AND 3  THEN 1
      WHEN d.month BETWEEN 4 AND 6  THEN 2
      WHEN d.month BETWEEN 7 AND 9  THEN 3
      WHEN d.month BETWEEN 10 AND 12 THEN 4
    END AS quarter,
    f.revenue
  FROM bid3000_eksamen.factsales f
  JOIN bid3000_eksamen.dimdate d ON f.dateid_fk = d.dateid
  JOIN bid3000_eksamen.dimcountry c ON f.countryid_fk = c.countryid
),
quarter_totals AS (
  SELECT
    countryid,
    countryname,
    year,
    quarter,
    SUM(revenue) AS quarter_revenue
  FROM base
  GROUP BY countryid, countryname, year, quarter
)
SELECT
  countryname,
  year,
  quarter,
  quarter_revenue,
  LAG(quarter_revenue) OVER (
    PARTITION BY countryid, quarter
    ORDER BY year
  ) AS prev_year_quarter_revenue,
  quarter_revenue
    - LAG(quarter_revenue) OVER (
        PARTITION BY countryid, quarter
        ORDER BY year
      ) AS revenue_change,
  ROUND(
    100.0 * (
      quarter_revenue
      - LAG(quarter_revenue) OVER (
          PARTITION BY countryid, quarter
          ORDER BY year
        )
    ) / NULLIF(
        LAG(quarter_revenue) OVER (
          PARTITION BY countryid, quarter
          ORDER BY year
        ), 0
      ),
    2
  ) AS pct_change
FROM quarter_totals
ORDER BY countryname, year, quarter;

-- Business Interpretation:
-- Results show us that UK (primary market) demonstrates consistent Q4 revenue peaks, with Q4 in 2011 
-- generating 38% of annual revenue (£7.4M). Year-over-year analysis reveals 15-25% growth 
-- in established markets (UK, Germany) but declining trends in smaller markets suggest 
-- need for targeted international marketing. Q1 has a bad trend with a 20-30% drop from Q4. 
-- This suggest a more proactive approach to retaining customers. 
-- It should also be possible to optimize staffing situation and inventory planning better.


-- QUERY 2: Aggregation Operations
-- Multi-level ROLLUP by Country, Year, Quarter

-- Makes it possible to show subtotal at each level by hierarchical aggregation by using
-- GROUP BY ROLLUP for subtotals and grand totals

WITH base AS (
  SELECT
    c.countryname,
    d.year,
    CASE
      WHEN d.month BETWEEN 1 AND 3  THEN 1
      WHEN d.month BETWEEN 4 AND 6  THEN 2
      WHEN d.month BETWEEN 7 AND 9  THEN 3
      WHEN d.month BETWEEN 10 AND 12 THEN 4
    END AS quarter,
    f.revenue,
    f.quantity,
    f.productid_fk
  FROM bid3000_eksamen.factsales f
  JOIN bid3000_eksamen.dimcountry c ON f.countryid_fk = c.countryid
  JOIN bid3000_eksamen.dimdate d    ON f.dateid_fk = d.dateid
)
SELECT
  countryname,
  year,
  quarter,
  SUM(revenue) AS total_revenue,
  SUM(quantity) AS total_quantity,
  COUNT(DISTINCT productid_fk) AS distinct_products,
  COUNT(*) AS transaction_count
FROM base
GROUP BY ROLLUP (countryname, year, quarter)
ORDER BY countryname NULLS LAST,
         year NULLS LAST,
         quarter NULLS LAST;

-- Business Interpretation:
-- ROLLUP aggregation show us total business is £19.45M over the past 2 years with 8,000+ 
-- transactions. UK with 92% of revenue (£17.9M), while 42 other countries 
-- contribute only £1.5M all together. 
-- UK sells 3,500 different products compared to 50-100 in other countries, 
-- showing opportunity to expand product catalog internationally. 
-- UK customers also buy more frequently and spend more per order (£18.33 average). 


-- QUERY 3: Window functions
-- Product Ranking and 3-Month Rolling Average

-- With this we want to rank products by monthly revenue and identifying trending products
-- by using techniques RANK() and AVG() window functions with ROWS BETWEEN

WITH monthly AS (
  SELECT
    p.productid,
    p.description,
    d.year,
    d.month,
    SUM(f.quantity) AS monthly_quantity,
    SUM(f.revenue)  AS monthly_revenue
  FROM bid3000_eksamen.factsales f
  JOIN bid3000_eksamen.dimproduct p ON f.productid_fk = p.productid
  JOIN bid3000_eksamen.dimdate d    ON f.dateid_fk     = d.dateid
  GROUP BY p.productid, p.description, d.year, d.month
)
SELECT
  productid,
  description,
  year,
  month,
  monthly_quantity,
  monthly_revenue,
  RANK() OVER (
    PARTITION BY year, month
    ORDER BY monthly_revenue DESC
  ) AS revenue_rank,
  ROUND(
    AVG(monthly_revenue) OVER (
      PARTITION BY productid
      ORDER BY year, month
      ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    )::numeric,
    2
  ) AS rolling_3month_avg
FROM monthly
ORDER BY year, month, revenue_rank;

-- Business Interpretation:
-- Top 5 products generate 25-30% of monthly revenue. "Regency Cakestand" is the 
-- bestseller for 18 out of 24 months, earning whopping £350K total. 
-- The 3-month rolling average helps spot trends as: "Dotcom Postage" revenue is growing steadily
-- (£15K → £22K from 2009-2011), showing customers are ordering more shipping services.
-- Products outside top 20 have unstable sales patterns. Their revenue jumps up and down by 50%+ each 
-- month, meaning they're likely seasonal items or just regular impulse buys. This analysis helps us 
-- identify which products are improving versus which are declining, so 
-- we can adjust marketing and inventory accordingly.


-- Query 4: Complex filtering
-- High-Value International Customers with Cancellations

-- With this we want to identify active customers in 2011 across countries with cancellation history
-- using techniques as: CTEs, subqueries, EXISTS/IN clauses, complex WHERE conditions

WITH customer_stats AS (
  SELECT
    c.customerid,
    COUNT(DISTINCT co.countryid) AS countries_count,
    SUM(f.revenue) AS total_revenue
  FROM bid3000_eksamen.dimcustomer c
  JOIN bid3000_eksamen.factsales f ON f.customerid_fk = c.customerid
  JOIN bid3000_eksamen.dimcountry co ON co.countryid = f.countryid_fk
  GROUP BY c.customerid
)
SELECT
  cs.customerid,
  cs.countries_count,
  cs.total_revenue,
  COUNT(DISTINCT fc.productid_fk) AS products_cancelled,
  SUM(fc.revenue_lost) AS total_revenue_lost,
  SUM(fc.quantity_cancelled) AS total_quantity_cancelled
FROM customer_stats cs
JOIN bid3000_eksamen.factcancellations fc ON fc.customerid_fk = cs.customerid
WHERE cs.countries_count > 1
  AND cs.total_revenue > 1000
  AND cs.customerid IN (
    SELECT DISTINCT f2.customerid_fk
    FROM bid3000_eksamen.factsales f2
    JOIN bid3000_eksamen.dimdate d2 ON d2.dateid = f2.dateid_fk
    WHERE d2.year = 2011
  )
GROUP BY cs.customerid, cs.countries_count, cs.total_revenue
ORDER BY cs.total_revenue DESC;

-- Business Interpretation:
-- 127 customers from different countries that generate £3.2M revenue (16% of total). 
-- They do have much higher cancellation rates though: 31% compared to the overall 1.84%. 
-- This is most likely because international orders face shipping delays, customs problems, 
-- and stock availability issues. For example, customer #14646 (the biggest international 
-- buyer with £280K revenue) cancels 12% of orders across 4 countries. These customers 
-- are valuable but need better support: faster communication about shipping times, local 
-- inventory to reduce delays, and better customer service for international orders could help.


-- Query 5: Business metrics
-- Customer Lifetime Value and Segmentation

-- With this we want to show a customer analysis with RFM-style segmentation
-- using techniques as multiple CTEs, calculated metrics, CASE-based classification

WITH customer_purchases AS (
  SELECT
    c.customerid,
    COUNT(DISTINCT f.salesid) AS total_orders,
    SUM(f.revenue) AS total_revenue,
    AVG(f.revenue) AS avg_order_value,
    SUM(f.quantity) AS total_items_purchased,
    MIN(d.date) AS first_purchase_date,
    MAX(d.date) AS last_purchase_date,
    COUNT(DISTINCT d.year || '-' || d.month) AS active_months
  FROM bid3000_eksamen.dimcustomer c
  JOIN bid3000_eksamen.factsales f ON f.customerid_fk = c.customerid
  JOIN bid3000_eksamen.dimdate d ON d.dateid = f.dateid_fk
  GROUP BY c.customerid
),
customer_cancellations AS (
  SELECT
    fc.customerid_fk,
    COUNT(*) AS cancellation_count,
    SUM(fc.revenue_lost) AS total_revenue_lost,
    SUM(fc.quantity_cancelled) AS total_items_cancelled
  FROM bid3000_eksamen.factcancellations fc
  GROUP BY fc.customerid_fk
)
SELECT
  cp.customerid,
  cp.total_orders,
  ROUND(cp.total_revenue, 2) AS total_revenue,
  ROUND(cp.avg_order_value, 2) AS avg_order_value,
  cp.total_items_purchased,
  cp.active_months,
  ROUND(cp.total_revenue / NULLIF(cp.active_months, 0), 2) AS avg_monthly_revenue,
  cp.first_purchase_date,
  cp.last_purchase_date,
  COALESCE(cc.cancellation_count, 0) AS cancellation_count,
  ROUND(COALESCE(cc.total_revenue_lost, 0), 2) AS total_revenue_lost,
  ROUND(
    100.0 * COALESCE(cc.cancellation_count, 0) / NULLIF(cp.total_orders, 0),
    2
  ) AS cancellation_rate_pct,
  ROUND(
    cp.total_revenue - COALESCE(cc.total_revenue_lost, 0),
    2
  ) AS net_revenue,
  CASE
    WHEN cp.total_revenue > 10000 AND COALESCE(cc.cancellation_count, 0) / NULLIF(cp.total_orders, 0) < 0.05 THEN 'VIP'
    WHEN cp.total_revenue > 5000 THEN 'High Value'
    WHEN cp.total_revenue > 1000 THEN 'Medium Value'
    ELSE 'Low Value'
  END AS customer_segment
FROM customer_purchases cp
LEFT JOIN customer_cancellations cc ON cc.customerid_fk = cp.customerid
WHERE cp.total_orders >= 5
ORDER BY net_revenue DESC
LIMIT 50;

-- Business Interpretation:
-- Top 50 customers (0.8% of all customers) generate £4.8M revenue which is a 25% of total. 
-- VIP customers (those spending £10K+) alone contribute approx £2.1M. 
-- Customer #14646 is the best customer with £279K revenue from 209 orders, averaging 
-- £1,335 per order and staying active 18 out of 24 months. We can see that VIP customers 
-- spend around 3x more per order (£45 vs £14) and buy 8+ times per year. But still 42% of our
-- customers only buy once, which means we're missing out on £3.2M in potential loyalty from customers. 
-- We should treat different customer groups differently: VIP customers deserve 
-- premium service and exclusive offers, while medium-value customers need loyalty programs 
-- to encourage them to buy again. The business need customers to buy again.


-- Query 6: Business metrics
-- Product Performance with custom health score

-- With this we want a product evaluation with weighted scoring algorithms 
-- using techniques as multiple CTEs, complex calculated metrics, weighted formula

WITH product_sales AS (
  SELECT
    p.productid,
    p.description,
    p.stockcode,
    COUNT(DISTINCT f.salesid) AS total_transactions,
    SUM(f.quantity) AS total_quantity_sold,
    SUM(f.revenue) AS total_revenue,
    AVG(f.unitprice) AS avg_selling_price,
    COUNT(DISTINCT f.customerid_fk) AS unique_customers,
    COUNT(DISTINCT f.countryid_fk) AS countries_sold_in
  FROM bid3000_eksamen.dimproduct p
  JOIN bid3000_eksamen.factsales f ON f.productid_fk = p.productid
  GROUP BY p.productid, p.description, p.stockcode
),
product_cancellations AS (
  SELECT
    fc.productid_fk,
    COUNT(*) AS cancellation_count,
    SUM(fc.quantity_cancelled) AS total_quantity_cancelled,
    SUM(fc.revenue_lost) AS total_revenue_lost
  FROM bid3000_eksamen.factcancellations fc
  GROUP BY fc.productid_fk
)
SELECT
  ps.productid,
  ps.description,
  ps.total_transactions,
  ps.total_quantity_sold,
  ROUND(ps.total_revenue, 2) AS total_revenue,
  ROUND(ps.avg_selling_price, 2) AS avg_selling_price,
  ps.unique_customers,
  ps.countries_sold_in,
  COALESCE(pc.cancellation_count, 0) AS cancellation_count,
  COALESCE(pc.total_quantity_cancelled, 0) AS total_quantity_cancelled,
  ROUND(COALESCE(pc.total_revenue_lost, 0), 2) AS total_revenue_lost,
  ROUND(
    100.0 * COALESCE(pc.cancellation_count, 0) / NULLIF(ps.total_transactions, 0),
    2
  ) AS cancellation_rate_pct,
  ROUND(
    100.0 * COALESCE(pc.total_quantity_cancelled, 0) / NULLIF(ps.total_quantity_sold, 0),
    2
  ) AS quantity_return_rate_pct,
  ROUND(ps.total_revenue / NULLIF(ps.unique_customers, 0), 2) AS revenue_per_customer,
  ROUND(
    LEAST(100,
      (ps.total_revenue / 1000) * 0.3 +
      (ps.unique_customers) * 0.2 +
      (ps.countries_sold_in * 5) * 0.1 +
      ((100 - COALESCE(100.0 * pc.cancellation_count / NULLIF(ps.total_transactions, 0), 0))) * 0.4
    ),
    2
  ) AS product_health_score,
  CASE
    WHEN COALESCE(100.0 * pc.cancellation_count / NULLIF(ps.total_transactions, 0), 0) > 10 THEN 'High Risk'
    WHEN ps.total_revenue < 500 THEN 'Low Performer'
    WHEN ps.total_revenue > 10000 AND COALESCE(pc.cancellation_count, 0) / NULLIF(ps.total_transactions, 0) < 0.05 THEN 'Star Product'
    ELSE 'Standard'
  END AS product_classification
FROM product_sales ps
LEFT JOIN product_cancellations pc ON pc.productid_fk = ps.productid
WHERE ps.total_transactions >= 10
ORDER BY product_health_score DESC, total_revenue DESC
LIMIT 50;

-- Business Interpretation:
-- The health score ranks products based on revenue, customer reach, countries sold, 
-- and cancellation rate. 18 "Star Products" (score 85+) generate £8.2M revenue (42% 
-- of total) with very few cancellations. "Regency Cakestand" has a perfect 100 score: 
-- £350K revenue, 1,847 customers, sold in 12 countries, with zero cancellations. This 
-- product is perfect for marketing and expansion. On the other hand there are 23 "High Risk" 
-- products that have 15%+ cancellation rates. "Manual" is worst with 37.84% cancellations 
-- and £506K lost revenue. This needs to be looked at with a microscope and investigated properly.
-- Top products sell in 18 countries on average, while poor products only sell in 3 countries, showing 
-- that good products have broad appeal. This should be a no-brainer.
-- The health score helps us decide what to do: promote star products, fix high-risk products, 
-- and stop selling products with poor scores. Easy as that.
`

const etl_py = `
#"""
# This Python file is based on the ETL.py, including the SCD optional bonus. 
#"""



# ==============================
# This Python script processes the ETL stage (Extract, Transform, Load).
# ==============================

import pandas as pd
import psycopg2
import time
# Read CSV
print("Leser fil")
df = pd.read_csv('online_retail_II.csv', dtype={'StockCode': str})  # Force string type

# Convert InvoiceDate to dateTime
df['InvoiceDate'] = pd.to_datetime(df['InvoiceDate'])

# Fill NULL customer ID values with 0 (anonymous)
df['Customer ID'] = df['Customer ID'].fillna(0).astype('int64')

# ==============================
# REMOVE SPECIFIC STOCKCODES
# ==============================
remove_stockcodes = [
    "TEST002",
    "TEST001",
    "SP1002",
    "S",
    "PADS",
    "M",
    "m",
    "D",
    "BANK CHARGES",
    "B",
    "AMAZONFEE",
    "ADJUST",
    "GIFT_0001_10",
    "GIFT_0001_20",
    "GIFT_0001_30",
    "GIFT_0001_40",
    "GIFT_0001_50",
    "GIFT_0001_60",
    "GIFT_0001_70",
    "GIFT_0001_80",
    "GIFT_0001_90"
]
initial_rows = len(df)
df = df[~df["StockCode"].isin(remove_stockcodes)]
print(f"Removed {initial_rows - len(df):,} rows with unwanted StockCodes")
print(f"Remaining rows: {len(df):,}")

# DEBUG: Count unique StockCodes in df
unique_stockcodes_in_df = df['StockCode'].nunique()
print(f"DEBUG: Unique StockCodes in df: {unique_stockcodes_in_df:,}")

# ==============================
# Connection to Database
# ==============================
print("Opens SQL connection with psycopg2...")
conn = psycopg2.connect(
    dbname="bid3000_eksamen",
    user="postgres",
    password="test123",
    host="localhost",
    port=5432
)
cur = conn.cursor()

# Set schema search path
cur.execute("SET search_path TO bid3000_eksamen")

# Clear dimension tables (so re-runs work)
cur.execute("TRUNCATE TABLE factsales, factcancellations CASCADE")
cur.execute("TRUNCATE TABLE dimdate, dimcustomer, dimproduct, dimcountry CASCADE")
conn.commit()

start_time = time.time()

# Extract unique dates
print("Extracts unique dates...")
dates = df['InvoiceDate'].unique()
for date in dates:
    cur.execute(
        "INSERT INTO dimdate (date, year, month, day) VALUES (%s, %s, %s, %s)",
        (date, date.year, date.month, date.day)
    )
print("Extraction of unique dates complete.")
print(f"Dates done: {time.time() - start_time:.1f}s")

# Extract unique customers
print("=== === ===\\nExtracts unique customers...")
cur.execute(
    "INSERT INTO dimcustomer (customerid, customername) VALUES (%s, %s)",
    (0, 'Anonymous')
)

customers = df['Customer ID'].fillna(0).astype('int64').unique()
for cid in customers:
    cid = int(cid)
    if cid != 0:  # Don't re-insert anonymous
        cur.execute(
            "INSERT INTO dimcustomer (customerid, customername) VALUES (%s, %s)",
            (cid, None)
        )
print("Extraction of unique customers complete.")
print(f"Customers done: {time.time() - start_time:.1f}s")







# Extract unique products with SCD Type 2 (Tracks price changes over time)
print("=== === ===\\nExtracts unique products (SCD Type 2)...")
products = df[df['Description'].notna()][['StockCode', 'Description', 'Price']].drop_duplicates()
products = products[products['Price'] > 0]

# Load existing products
cur.execute("SELECT stockcode, price, productid, is_current FROM dimproduct WHERE is_current = TRUE")
existing_products = {row[0]: {'price': row[1], 'id': row[2]} for row in cur.fetchall()}

shipping_keywords = ['POSTAGE', 'DOTCOM POSTAGE', 'CARRIAGE']
inserted_products = 0
updated_products = 0

for _, row in products.iterrows():
    description = str(row['Description']).strip().title()
    is_shipping = any(keyword in description.upper() for keyword in shipping_keywords)

    # Check if product exists
    if row['StockCode'] in existing_products:
        existing_price = existing_products[row['StockCode']]['price']

        # Price changed → SCD Type 2
        if existing_price != row['Price']:
            # Close old record
            cur.execute(
                "UPDATE dimproduct SET end_date = CURRENT_DATE, is_current = FALSE WHERE stockcode = %s AND is_current = TRUE",
                (row['StockCode'],)
            )
            # Insert new record
            cur.execute(
                "INSERT INTO dimproduct (stockcode, description, price, is_shipping, effective_date, is_current) VALUES (%s, %s, %s, %s, CURRENT_DATE, TRUE)",
                (row['StockCode'], description, row['Price'], is_shipping)
            )
            updated_products += 1
    else:
        # New product
        cur.execute(
            "INSERT INTO dimproduct (stockcode, description, price, is_shipping, effective_date, is_current) VALUES (%s, %s, %s, %s, CURRENT_DATE, TRUE)",
            (row['StockCode'], description, row['Price'], is_shipping)
        )
        inserted_products += 1

print(f"New products: {inserted_products:,}, Price changes tracked: {updated_products:,}")
print(f"DEBUG: Actually inserted {inserted_products:,} products into dimproduct")
print("Extraction of unique products complete.")
print(f"Products done: {time.time() - start_time:.1f}s")







# Extract unique countries
print("=== === ===\\nExtracts unique countries...")
countries = df[['Country']].drop_duplicates()
for country in countries['Country']:
    cur.execute("INSERT INTO dimcountry (countryname) VALUES (%s)", (country,))
print("Extraction of unique countries complete.")
print(f"Countries done: {time.time() - start_time:.1f}s")

# ==============================
# Creating dimension tables...
# ==============================
print("=== === ===\\nLoading dimension tables into memory for faster processing...")
cur.execute("SELECT date, dateid FROM dimdate")
date_map = {row[0]: row[1] for row in cur.fetchall()}

cur.execute("SELECT customerid FROM dimcustomer")
customer_ids = {row[0] for row in cur.fetchall()}

cur.execute("SELECT stockcode, productid FROM dimproduct WHERE is_current = TRUE")
product_map = {row[0]: row[1] for row in cur.fetchall()}
print(f"DEBUG: product_map has {len(product_map):,} entries")

cur.execute("SELECT countryname, countryid FROM dimcountry")
country_map = {row[0]: row[1] for row in cur.fetchall()}

# Create set of valid StockCodes for faster lookup
valid_stockcodes = set(product_map.keys())
print(f"DEBUG: valid_stockcodes has {len(valid_stockcodes):,} entries")

# DEBUG: Check for missing StockCodes
df_stockcodes = set(df['StockCode'].unique())
missing_stockcodes = df_stockcodes - valid_stockcodes
print(f"DEBUG: StockCodes in df but NOT in product_map: {len(missing_stockcodes):,}")
if len(missing_stockcodes) > 0 and len(missing_stockcodes) <= 20:
    print(f"DEBUG: Missing StockCodes: {sorted(list(missing_stockcodes))}")
elif len(missing_stockcodes) > 20:
    print(f"DEBUG: First 20 missing StockCodes: {sorted(list(missing_stockcodes))[:20]}")

# Inserting into facts sales table...
print("Inserting fact sales... This might take a few minutes...")

# DEBUG counters
total_rows = 0
skipped_quantity_zero = 0
skipped_price_zero = 0
skipped_stockcode_missing = 0
inserted_rows = 0

for _, row in df.iterrows():
    total_rows += 1
    
    if row['Quantity'] == 0:
        skipped_quantity_zero += 1
        continue
    
    if row['Price'] <= 0:
        skipped_price_zero += 1
        continue
    
    if row['StockCode'] not in valid_stockcodes:
        skipped_stockcode_missing += 1
        continue

    date_id = date_map[row['InvoiceDate'].date()]
    cid = int(row['Customer ID']) if pd.notna(row['Customer ID']) else 0
    product_id = product_map[row['StockCode']]
    country_id = country_map[row['Country']]
    revenue = row['Quantity'] * row['Price']

    cur.execute(
        """INSERT INTO factsales (dateid_fk, customerid_fk, productid_fk,
        countryid_fk, quantity, unitprice, revenue)
        VALUES (%s, %s, %s, %s, %s, %s, %s)""",
        (date_id, cid, product_id, country_id, row['Quantity'], row['Price'], revenue)
    )
    inserted_rows += 1

print(f"\\nDEBUG SUMMARY FOR FACTSALES:")
print(f"  Total rows processed: {total_rows:,}")
print(f"  Skipped (Quantity == 0): {skipped_quantity_zero:,}")
print(f"  Skipped (Price <= 0): {skipped_price_zero:,}")
print(f"  Skipped (StockCode not in product_map): {skipped_stockcode_missing:,}")
print(f"  Actually inserted: {inserted_rows:,}")

conn.commit()  # Commit once after loop, not per row
print("Insertion of fact sales complete.")
print(f"FactSales complete: {time.time() - start_time:.1f}s ({(time.time() - start_time)/60:.1f} minutes)")

# Insert into FactCancellations (cancelled invoices, Invoice starts with 'C')
cancelled = df[df['Quantity'] < 0].copy()
cancelled = cancelled[cancelled['Price'] > 0]  # Skip zero/negative prices
print("=== === ===\\nInserting into fact-table factcancellations...")

# DEBUG counters for cancellations
cancelled_total = len(cancelled)
cancelled_skipped = 0
cancelled_inserted = 0

for _, row in cancelled.iterrows():
    if row['StockCode'] not in valid_stockcodes:
        cancelled_skipped += 1
        continue
    
    date_id = date_map[row['InvoiceDate'].date()]
    cid = int(row['Customer ID']) if pd.notna(row['Customer ID']) else 0
    product_id = product_map[row['StockCode']]
    country_id = country_map[row['Country']]
    revenue_lost = abs(row['Quantity'] * row['Price'])
    
    cur.execute(
        """INSERT INTO factcancellations (dateid_fk, customerid_fk, productid_fk,
        countryid_fk, quantity_cancelled, revenue_lost)
        VALUES (%s, %s, %s, %s, %s, %s)""",
        (date_id, cid, product_id, country_id, abs(row['Quantity']), revenue_lost)
    )
    cancelled_inserted += 1

print(f"\\nDEBUG SUMMARY FOR FACTCANCELLATIONS:")
print(f"  Total cancelled rows: {cancelled_total:,}")
print(f"  Skipped (StockCode not in product_map): {cancelled_skipped:,}")
print(f"  Actually inserted: {cancelled_inserted:,}")

conn.commit()
print("Insertion of fact cancellations complete.")
print(f"FactCancellations complete: {time.time() - start_time:.1f}s ({(time.time() - start_time)/60:.1f} minutes)")

cur.close()
conn.close()
`

    return (
        <div className = "container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
                    <BreadcrumbItem href="/emner">Emner</BreadcrumbItem>
                    <BreadcrumbItem href="/emner/bid3000">Business Intelligence & Data Warehousing</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">BID3000 - Business Intelligence & Data Warehousing</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Hjemmeeksamen i gruppe">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">To ukers hjemmeeksamen i gruppe</h2></CardHeader>
                            <CardBody>
                                <p>I dette faget er det ikke formelle arbeidskrav, men det er obligatorisk å ta
                                    Microsoft PowerBI PL-300"-kurset. Det er derimot <em>to eksamener</em>! Den første
                                    er en to ukers "hjemmeeksamen". Eksamenssett og besvarelse følger, men da det er en
                                    mappeinnlevering vil det vises rapporter, skjermbilder og Jupyter-notebooks.
                                    Repositoriumet er også tilgjengelig hos <a
                                        href="https://www.linkedin.com/in/kenneth-hansen-383056b7/">Kenneth</a> sitt <a
                                        href="https://github.com/Karmaburner/BID3000-Business-Intelligence">GitHub-repo</a>.
                                    Jeg har forket hans repo og gjort noen få endringer i <Code
                                        size={"sm"}>README.md</Code>-filen.</p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <p style={{ margin: 0 }}>Du kan se og klone repositoriumet på</p>
                                    <a href="https://github.com/Scandiking/BID3000-Business-Intelligence">
                                        <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" alt="GitHub" />
                                    </a>
                                </div>



                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/BID3000/BID3000 - Home exam - H25.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="MET1020 Obligatorisk arbeidskrav"
                                        className="border-0"

                                    />

                                </div>

                                <p>Som man ser er det en del filer, og det er en liten nøtt å vise dette på én nettside
                                    i stedet for i et operativsystem-miljø. Det går heller ikke an å vise oppgave for
                                    oppgave da de henger sammen. Filer vil derfor vises som i <strong>Submission
                                        Guidelines</strong> og under <strong>File Organization</strong>.</p>

                                <Spacer/>
                                <h2 className="text-lg font-semibold">BID3000_Final_Report.pdf</h2>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/BID3000/BID3000_Final_Report.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="MET1020 Obligatorisk arbeidskrav"
                                        className="border-0"

                                    />

                                </div>

                                <Spacer/>
                                <h2 className="text-lg font-semibold">schema_creation.sql</h2>
                                <p>Opprettelse av database og tabeller</p>
                                <CodeBlock
                                    code={schema_creation_sql}
                                    language="SQL"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />

                                <Spacer/>
                                <h2 className="text-lg font-semibold">queries.sql</h2>
                                <p>SQL-spørringer for forretningsanalyse</p>
                                <CodeBlock
                                    code={queries_sql}
                                    language="SQL"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />


                                <Spacer/>
                                <h2 className="text-lg font-semibold">ETL-filer</h2>
                                <p>Filer for å "Extract, Transform, Load" i en dataprosess. Vi vil ekstrahere rader fra
                                    en <code>.csv</code>-fil, sjekke og rengjøre data. Dette gjøres via en
                                    Python-fil <code>ETL.py</code></p>

                                <CodeBlock
                                    code={etl_py}
                                    language="Python"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />


                                <Spacer/>
                                <h2 className="text-lg font-semibold">Analytics-script</h2>
                                <p>Analytics-script kjører faktisk forretningsanalyse basert på populerte tabeller.</p>

                                <div>

                                    {loading && <p>Loading notebook...</p>}
                                    {error && (
                                        <div
                                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                            <p className="font-bold">Error:</p>
                                            <p>{error}</p>
                                        </div>
                                    )}
                                    {notebook && (
                                        <div className="overflow-auto max-w-full">
                                            <IpynbRenderer ipynb={notebook}/>
                                        </div>
                                    )}

                                </div>


                                <Spacer/>
                                <h2 className="text-lg font-semibold">PowerBI</h2>
                                <p>Dashboard-filen tetter gapet mellom programmerere og "datafolk" slik at det er
                                    forståelig for andre, for eksempel selgere og regnskap.</p>


                                <Spacer/>
                                <Spacer/>
                                <Spacer/>
                                <Spacer/>

                                {/*MAIN DASHBOARD */}
                                <Image
                                    loading="eager"
                                    radius="sm"
                                    alt="PowerBI main dashboard with KPI cards and column, bar and line charts"
                                    src="https://github.com/Scandiking/BID3000-Business-Intelligence/raw/main/Dashboard/PowerBI_Screenshots/PowerBI_dashboard_Main_Page.png"
                                    width="100%"
                                />
                                <h2 className="text-lg font-semibold">Hoved-dashboard</h2>
                                <p>Oversiktsside med KPI-er og navigasjon.</p>

                                <Spacer/>
                                <Spacer/>
                                <Spacer/>
                                <Spacer/>

                                {/*REVENUE ANALYSIS*/}
                                <Image
                                    loading="eager"
                                    radius="sm"
                                    alt="PowerBI main dashboard with KPI cards and column, bar and line charts"
                                    src="https://github.com/Scandiking/BID3000-Business-Intelligence/raw/main/Dashboard/PowerBI_Screenshots/PowerBI_dashboard_Revenue.png"
                                    width="100%"

                                />
                                <h2 className="text-lg font-semibold">Fortjenesteanalyse</h2>
                                <p>Detaljert oppstykking av fortjeneste etter tid, land og produkt med
                                    drilldown-muligheter.</p>

                                <Spacer/>
                                <Spacer/>
                                <Spacer/>
                                <Spacer/>

                                {/* CANCELLATIONS ANALYSIS */}
                                <Image
                                    loading="eager"
                                    radius="sm"
                                    alt="PowerBI main dashboard with KPI cards and column, bar and line charts"
                                    src="https://github.com/Scandiking/BID3000-Business-Intelligence/raw/main/Dashboard/PowerBI_Screenshots/PowerBI_Dashboard_Cancellations.png"
                                    width="100%"

                                />
                                <h2 className="text-lg font-semibold">Kanselleringsanalyse</h2>
                                <p>Kanselleringsanalyse, tapt fortjeneste og kanselleringsmønstre.</p>

                                <Spacer/>
                                <Spacer/>
                                <Spacer/>
                                <Spacer/>


                                {/* DETAILED ANALYSIS */}
                                <Image
                                    loading="eager"
                                    radius="sm"
                                    alt="PowerBI main dashboard with KPI cards and column, bar and line charts"
                                    src="https://github.com/Scandiking/BID3000-Business-Intelligence/raw/main/Dashboard/PowerBI_Screenshots/PowerBI_dashboard_Detailed_Analysis_Page.png"
                                    width="100%"

                                />
                                <h2 className="text-lg font-semibold">Detaljert analyse</h2>
                                <p>Geografisk distribusjon og inngående forretningsmåling med interaktive filtre.</p>

                                <Spacer/>
                                <Spacer/>
                                <Spacer/>
                                <Spacer/>

                                <Image
                                    loading="eager"
                                    radius="sm"
                                    alt="PowerBI main dashboard with KPI cards and column, bar and line charts"
                                    src="https://github.com/Scandiking/BID3000-Business-Intelligence/raw/main/Dashboard/PowerBI_Screenshots/PowerBI_Customer_Segments.png"
                                    width="100%"

                                />
                                <h2 className="text-lg font-semibold">Kundesegmentering</h2>
                                {/* Customer segmentation */}
                                <p>RFM-baserte kundegruppe-segmenter med forretningsinnsikt man kan handle utifra fra
                                    gitte anbefalinger.</p>

                                <Spacer/>
                                <Spacer/>
                                <Spacer/>
                                <Spacer/>

                                <h2 className="text-lg font-semibold">Dokumentasjon</h2>
                                <h2 className="text-md font-semibold">ERD.pdf</h2>

                                <p>This diagram shows both schemas as the fact tables uses the same dimension tables.</p>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/BID3000/ERD_diagram.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="Entity Relation Diagram for a data warehouse in snowflake"
                                        className="border-0"

                                    />

                                </div>

                                <Image
                                    loading="eager"
                                    radius="none"
                                    alt="Little badge that says grade A"
                                    src="https://img.shields.io/badge/Karakter-A-gold"
                                    width="100"
                                    height="auto"
                                />


                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Individuell eksamen">
                        <Card>
                        <CardHeader><h2 className="text-lg font-semibold">Individuell eksamen</h2> </CardHeader>
                            <CardBody><p>Dette er en individuell eksamen. Oppgavesett. Besvarelse følger i egen <code>.pdf</code> under.</p>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/BID3000/BID3000-Written examination-H25-H.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="BID3000 Eksamen"
                                        className="border-0"
                                    />
                                </div>

                                <p>Besvarelse på oppgavesett.</p>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/BID3000/7214-Min besvarelse.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="BID3000 Eksamen"
                                        className="border-0"
                                    />
                                </div>

                                <Image
                                    loading="eager"
                                    radius="none"
                                    alt="Little badge that says grade B"
                                    src="https://img.shields.io/badge/Karakter-B-silver"
                                    width="100"
                                    height="auto"
                                />


                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default BID3000;