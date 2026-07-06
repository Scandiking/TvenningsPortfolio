import React from 'react';
import { Button } from '@heroui/react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info);
    }

    render() {
        if (!this.state.error) return this.props.children;

        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Oi, her gikk noe galt 🛠️</h1>
                <p className="text-default-500 mb-6">
                    Siden krasjet uventet. Prøv å laste den på nytt — hvis det ikke hjelper,
                    er feilen på min side, ikke din.
                </p>
                <details className="mb-6 text-left max-w-xl mx-auto">
                    <summary className="cursor-pointer text-sm text-default-400">Tekniske detaljer</summary>
                    <pre className="text-xs bg-content2 p-3 rounded mt-2 overflow-auto whitespace-pre-wrap">
                        {String(this.state.error?.stack || this.state.error)}
                    </pre>
                </details>
                <div className="flex gap-4 justify-center">
                    <Button color="primary" onPress={() => window.location.reload()}>
                        Last siden på nytt
                    </Button>
                    <Button
                        variant="bordered"
                        onPress={() => { window.location.hash = '#/'; window.location.reload(); }}
                    >
                        Til forsiden
                    </Button>
                </div>
            </div>
        );
    }
}

export default ErrorBoundary;
