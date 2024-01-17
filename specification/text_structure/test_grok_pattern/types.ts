import {integer} from '@_types/Numeric'
import {Dictionary} from "@spec_utils/Dictionary";

export class MatchedField {
    match: string
    offset: integer
    length: integer
}

export class MatchedText {
    matched: boolean
    fields?: Dictionary<string, MatchedField | MatchedField[]>
}
