declare module 'pixl-xml' {

    interface PixlParseOptions {
        preserveAttributes?: boolean
        lowerCase?: boolean
        preserveDocumentNode?: boolean
        preserveWhitespace?: boolean
        forceArrays?: boolean
    }

    interface ParsedXML {
        piNodeList: string[]
        dtdNodeList: string[]
    }

    /**
     * Parser class can be used for a more object oriented style API
     */
    class Parser <T extends ParsedXML>{
        constructor (xml: string, options?: PixlParseOptions)

        public tree: T

        /**
         * Returns the parsed XML tree. This tree is mutable and can be modified
         * as necessary.
         */
        public getTree (): T

        /**
         * Returns an XML string representing the current
         * @param indentCharacter
         * @param eol
         */
        public compose (indentCharacter?: string, eol?: string): string
    }

    /**
     * Encode the three standard XML entities, ampersand (&), left-angle-bracket
     * (<) and right-angle-bracket (>), into their XML-safe counterparts.
     * @param xml
     */
    function encodeEntities (xml: string): string

    /**
     * Similar to encodeEntities, but it also includes encoding for single-quotes
     * (') and double-quotes ("). It is used for encoding an XML string for
     * composing into an attribute value.
     * @param xml
     */
    function encodeAttribEntities (xml: string): string

    /**
     * This function decodes all the standard XML entities back into their
     * original characters. This includes ampersand (&), left-angle-bracket (<),
     * right-angle-bracket (>), single-quote (') and double-quote (").
     * @param xml
     */
    function decodeEntities (xml: string): string

    /**
     * This function will wrap anything passed to it into an array and return the
     * array, unless the item passed is already an array, in which case it is
     * simply returned verbatim.
     * @param input
     */
    function alwaysArray <T>(input: T|T[]): T[]

    /**
     * This function returns all the hash keys as an array. Useful for sorting and
     * then iterating over the sorted list.
     * @param input
     */
    function hashKeysToArray (input: object): string[]

    /**
     * This function returns true if the provided argument is a hash (object),
     * false otherwise.
     * @param input
     */
    function isaHash (input: any): boolean

    /**
     * This function returns true if the provided argument is an array
     * (or is array-like), false otherwise.
     * @param input
     */
    function isaArray (input: any): boolean

    /**
     * his function returns the number of keys in the specified hash.
     * @param hash
     */
    function numKeys (hash: object): number

    /**
     * This function returns the first key of the hash when iterating over it.
     * Note that hash keys are stored in an undefined order.
     * @param hash
     */
    function firstKey (hash: object): string

    /**
     * Parse an XML string into a JSON Object.
     * Throws if a parsing error occurs.
     * @param xml
     */
    function parse<T>(xml: string, options?: PixlParseOptions): T

    /**
     * Composes XML Objects back to a string. Pass in your pre-parsed XML object,
     * and an outer wrapper element name. It helps if you parsed the original XML
     * using the preserveAttributes option for this, as it will honor the _Attribs
     * sub-objects and convert them back into real XML attributes.
     * @param doc
     * @param outerElName
     * @param indentSize
     * @param indentCharacter
     * @param eolCharacter
     * @param preserveOrder
     */
    function stringify(doc: Object, outerElName?: string, indentSize?: number, indentCharacter?: string, eolCharacter?: string, preserveOrder?: boolean): string
}
  