import { BaseObject } from "../BaseObject";

/**
 * The `RedirectionConfig` data structure contains information for a redirection URL.
 */
interface IRedirectionConfig {
    /**
     * The redirection URL.
     */
    URL: string;
    /**
     * A display name of the redirection URL.
     */
    displayName: string;
}

/**
 * Class representing a {@link IRedirectionConfig}.
 */
export class RedirectionConfig extends BaseObject<IRedirectionConfig> {
    /**
     * Create a new instance of a `RedirectionConfig`.
     * @constructor
     * @param {IRedirectionConfig} redirectionConfig
     */
    constructor(redirectionConfig: IRedirectionConfig) {
        super(redirectionConfig);
    }
}
