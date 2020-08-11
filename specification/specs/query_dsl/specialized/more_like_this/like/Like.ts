/**
 * Text that we want similar documents for or a lookup to a document's field for the text.
 * @url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html#_document_input_parameters
 * @class_serializer LikeFormatter
 */
type Like = string | LikeDocument
