import { RequestBase } from '@_types/Base'

/**
 * @rest_spec_name text_structure.test_grok_pattern
 * @availability stack since=8.13.0 stability=experimental visibility=public
 * @availability serverless stability=experimental visibility=private
 */
export interface Request extends RequestBase {
    body: {
        /**
         * Grok pattern to run on the text.
         */
        grok_pattern: string

        /**
         * Lines of text to run the Grok pattern on.
         */
        text: string[]
    }
}
