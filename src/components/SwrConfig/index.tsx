import React, { ReactNode } from 'react';
import { SWRConfig, Cache } from 'swr';
import { Fetcher, PublicConfiguration } from 'swr/dist/types';

import { render, RenderOptions } from "@testing-library/react"
import { FC, ReactElement } from "react"

type Provider = { provider?: () => Cache<any> };

/**
 * custom SWR component for testing
 */

export function SwrConfig({
    children,
    swrConfig,
}: {
    children?: ReactNode;
    // eslint-disable-next-line
    swrConfig?: Partial<PublicConfiguration<any, any, Fetcher<any>>> & Provider;
}) {
    return (
        <SWRConfig value={{ "fetcher": customFetcher, ...swrConfig }}>
            {children}
        </SWRConfig>
    );
}

const AllTheProviders: FC<any> = ({ children }) => {
    return (
        <SwrConfig data-testid={"swr-config"} swrConfig={{ "dedupingInterval": 0, "provider": () => new Map() }}>
            {children}
        </SwrConfig>
    );
};

export async function customFetcher(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
        const json = (await res.json()) as { message: string };
        throw new Error(json.message);
    }

    return res.json();
}
export const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { "wrapper": AllTheProviders, ...options });

