/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Field, Fields, GrokPattern, Id, Name } from '@_types/common'
import { GeoShapeRelation } from '@_types/Geo'
import { double, integer, long } from '@_types/Numeric'
import { SortOrder } from '@_types/sort'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * @variants container
 * @non_exhaustive
 */
export class ProcessorContainer {
  /**
   * Appends one or more values to an existing array if the field already exists and it is an array.
   * Converts a scalar to an array and appends one or more values to it if the field exists and it is a scalar.
   * Creates an array containing the provided values if the field doesn’t exist.
   * Accepts a single value or an array of values.
   * @doc_id append-processor
   */
  append?: AppendProcessor
  /**
   * The attachment processor lets Elasticsearch extract file attachments in common formats (such as PPT, XLS, and PDF) by using the Apache text extraction library Tika.
   * @doc_id attachment
   */
  attachment?: AttachmentProcessor
  /**
   * Converts a human readable byte value (for example `1kb`) to its value in bytes (for example `1024`).
   * If the field is an array of strings, all members of the array will be converted.
   * Supported human readable units are "b", "kb", "mb", "gb", "tb", "pb" case insensitive.
   * An error will occur if the field is not a supported format or resultant value exceeds 2^63.
   * @doc_id bytes-processor
   */
  bytes?: BytesProcessor
  /**
   * Converts circle definitions of shapes to regular polygons which approximate them.
   * @doc_id ingest-circle-processor
   */
  circle?: CircleProcessor
  /**
   * Computes the Community ID for network flow data as defined in the
   * Community ID Specification. You can use a community ID to correlate network
   * events related to a single flow.
   * @doc_id community-id-processor
   */
  community_id?: CommunityIDProcessor
  /**
   * Converts a field in the currently ingested document to a different type, such as converting a string to an integer.
   * If the field value is an array, all members will be converted.
   * @doc_id convert-processor
   */
  convert?: ConvertProcessor
  /**
   * Extracts fields from CSV line out of a single text field within a document.
   * Any empty field in CSV will be skipped.
   * @doc_id csv-processor
   */
  csv?: CsvProcessor
  /**
   * Parses dates from fields, and then uses the date or timestamp as the timestamp for the document.
   * @doc_id data-processor
   */
  date?: DateProcessor
  /**
   * The purpose of this processor is to point documents to the right time based index based on a date or timestamp field in a document by using the date math index name support.
   * @doc_id date-index-name-processor
   */
  date_index_name?: DateIndexNameProcessor
  /**
   * Extracts structured fields out of a single text field by matching the text field against a delimiter-based pattern.
   * @doc_id dissect-processor
   */
  dissect?: DissectProcessor
  /**
   * Expands a field with dots into an object field.
   * This processor allows fields with dots in the name to be accessible by other processors in the pipeline.
   * Otherwise these fields can’t be accessed by any processor.
   * @doc_id dot-expand-processor
   */
  dot_expander?: DotExpanderProcessor
  /**
   * Drops the document without raising any errors.
   * This is useful to prevent the document from getting indexed based on some condition.
   * @doc_id drop-processor
   */
  drop?: DropProcessor
  /**
   * The `enrich` processor can enrich documents with data from another index.
   * @doc_id enrich-processor
   */
  enrich?: EnrichProcessor
  /**
   * Raises an exception.
   * This is useful for when you expect a pipeline to fail and want to relay a specific message to the requester.
   * @doc_id fail-processor
   */
  fail?: FailProcessor
  /**
   * Computes a hash of the document’s content. You can use this hash for
   * content fingerprinting.
   * @doc_id fingerprint-processor
   */
  fingerprint?: FingerprintProcessor
  /**
   * Runs an ingest processor on each element of an array or object.
   * @doc_id foreach-processor
   */
  foreach?: ForeachProcessor
  /**
   * Currently an undocumented alias for GeoIP Processor.
   */
  ip_location?: IpLocationProcessor
  /**
   * Converts geo-grid definitions of grid tiles or cells to regular bounding boxes or polygons which describe their shape.
   * This is useful if there is a need to interact with the tile shapes as spatially indexable fields.
   * @doc_id geo-grid-processor
   */
  geo_grid?: GeoGridProcessor
  /**
   * The `geoip` processor adds information about the geographical location of an IPv4 or IPv6 address.
   * @doc_id geoip-processor
   */
  geoip?: GeoIpProcessor
  /**
   * Extracts structured fields out of a single text field within a document.
   * You choose which field to extract matched fields from, as well as the grok pattern you expect will match.
   * A grok pattern is like a regular expression that supports aliased expressions that can be reused.
   * @doc_id grok-processor
   */
  grok?: GrokProcessor
  /**
   * Converts a string field by applying a regular expression and a replacement.
   * If the field is an array of string, all members of the array will be converted.
   * If any non-string values are encountered, the processor will throw an exception.
   * @doc_id gsub-processor
   */
  gsub?: GsubProcessor
  /**
   * Removes HTML tags from the field.
   * If the field is an array of strings, HTML tags will be removed from all members of the array.
   * @doc_id htmlstrip-processor
   */
  html_strip?: HtmlStripProcessor
  /**
   * Uses a pre-trained data frame analytics model or a model deployed for natural language processing tasks to infer against the data that is being ingested in the pipeline.
   * @doc_id inference-processor
   */
  inference?: InferenceProcessor
  /**
   * Joins each element of an array into a single string using a separator character between each element.
   * Throws an error when the field is not an array.
   * @doc_id join-processor
   */
  join?: JoinProcessor
  /**
   * Converts a JSON string into a structured JSON object.
   * @doc_id json-processor
   */
  json?: JsonProcessor
  /**
   * This processor helps automatically parse messages (or specific event fields) which are of the `foo=bar` variety.
   * @doc_id kv-processor
   */
  kv?: KeyValueProcessor
  /**
   * Converts a string to its lowercase equivalent.
   * If the field is an array of strings, all members of the array will be converted.
   * @doc_id lowercase-processor
   */
  lowercase?: LowercaseProcessor
  /**
   * Calculates the network direction given a source IP address, destination IP
   * address, and a list of internal networks.
   * @doc_id network-direction-processor
   */
  network_direction?: NetworkDirectionProcessor
  /**
   * Executes another pipeline.
   * @doc_id pipeline-processor
   */
  pipeline?: PipelineProcessor
  /**
   * The Redact processor uses the Grok rules engine to obscure text in the input document matching the given Grok patterns.
   * The processor can be used to obscure Personal Identifying Information (PII) by configuring it to detect known patterns such as email or IP addresses.
   * Text that matches a Grok pattern is replaced with a configurable string such as `<EMAIL>` where an email address is matched or simply replace all matches with the text `<REDACTED>` if preferred.
   * @doc_id redact-processor
   */
  redact?: RedactProcessor
  /**
   * Extracts the registered domain (also known as the effective top-level
   * domain or eTLD), sub-domain, and top-level domain from a fully qualified
   * domain name (FQDN). Uses the registered domains defined in the Mozilla
   * Public Suffix List.
   * @doc_id registered-domain-processor
   */
  registered_domain?: RegisteredDomainProcessor
  /**
   * Removes existing fields.
   * If one field doesn’t exist, an exception will be thrown.
   * @doc_id remove-processor
   */
  remove?: RemoveProcessor
  /**
   * Renames an existing field.
   * If the field doesn’t exist or the new name is already used, an exception will be thrown.
   * @doc_id rename-processor
   */
  rename?: RenameProcessor
  /**
   * Routes a document to another target index or data stream.
   * When setting the `destination` option, the target is explicitly specified and the dataset and namespace options can’t be set.
   * When the `destination` option is not set, this processor is in a data stream mode. Note that in this mode, the reroute processor can only be used on data streams that follow the data stream naming scheme.
   * @doc_id reroute-processor
   */
  reroute?: RerouteProcessor
  /**
   * Runs an inline or stored script on incoming documents.
   * The script runs in the `ingest` context.
   * @doc_id script-processor
   */
  script?: ScriptProcessor
  /**
   * Adds a field with the specified value.
   * If the field already exists, its value will be replaced with the provided one.
   * @doc_id set-processor
   */
  set?: SetProcessor
  /**
   * Sets user-related details (such as `username`, `roles`, `email`, `full_name`, `metadata`, `api_key`, `realm` and `authentication_type`) from the current authenticated user to the current document by pre-processing the ingest.
   * @doc_id ingest-node-set-security-user-processor
   */
  set_security_user?: SetSecurityUserProcessor
  /**
   * Sorts the elements of an array ascending or descending.
   * Homogeneous arrays of numbers will be sorted numerically, while arrays of strings or heterogeneous arrays of strings + numbers will be sorted lexicographically.
   * Throws an error when the field is not an array.
   * @doc_id sort-processor
   */
  sort?: SortProcessor
  /**
   * Splits a field into an array using a separator character.
   * Only works on string fields.
   * @doc_id split-processor
   */
  split?: SplitProcessor
  /**
   * Terminates the current ingest pipeline, causing no further processors to be run.
   * This will normally be executed conditionally, using the `if` option.
   * @doc_id terminate-processor
   */
  terminate?: TerminateProcessor
  /**
   * Trims whitespace from a field.
   * If the field is an array of strings, all members of the array will be trimmed.
   * This only works on leading and trailing whitespace.
   * @doc_id trim-processor
   */
  trim?: TrimProcessor
  /**
   * Converts a string to its uppercase equivalent.
   * If the field is an array of strings, all members of the array will be converted.
   * @doc_id uppercase-processor
   */
  uppercase?: UppercaseProcessor
  /**
   * URL-decodes a string.
   * If the field is an array of strings, all members of the array will be decoded.
   * @doc_id urldecode-processor
   */
  urldecode?: UrlDecodeProcessor
  /**
   * Parses a Uniform Resource Identifier (URI) string and extracts its components as an object.
   * This URI object includes properties for the URI’s domain, path, fragment, port, query, scheme, user info, username, and password.
   * @doc_id uri-parts-processor
   */
  uri_parts?: UriPartsProcessor
  /**
   * The `user_agent` processor extracts details from the user agent string a browser sends with its web requests.
   * This processor adds this information by default under the `user_agent` field.
   * @doc_id user-agent-processor
   */
  user_agent?: UserAgentProcessor
}

export class ProcessorBase {
  /**
   * Description of the processor.
   * Useful for describing the purpose of the processor or its configuration.
   */
  description?: string
  /**
   * Conditionally execute the processor.
   */
  if?: string
  /**
   * Ignore failures for the processor.
   */
  ignore_failure?: boolean
  /**
   * Handle failures for the processor.
   */
  on_failure?: ProcessorContainer[]
  /**
   * Identifier for the processor.
   * Useful for debugging and metrics.
   */
  tag?: string
}

export class AppendProcessor extends ProcessorBase {
  /**
   * The field to be appended to.
   * Supports template snippets.
   */
  field: Field
  /**
   * The value to be appended. Supports template snippets.
   */
  value: UserDefinedValue | UserDefinedValue[]
  /**
   * If `false`, the processor does not append values already present in the field.
   * @server_default true
   */
  allow_duplicates?: boolean
}

export class AttachmentProcessor extends ProcessorBase {
  /**
   * The field to get the base64 encoded field from.
   */
  field: Field
  /**
   * If `true` and field does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The number of chars being used for extraction to prevent huge fields.
   * Use `-1` for no limit.
   * @server_default 100000
   */
  indexed_chars?: long
  /**
   * Field name from which you can overwrite the number of chars being used for extraction.
   * @server_default null
   */
  indexed_chars_field?: Field
  /**
   * Array of properties to select to be stored.
   * Can be `content`, `title`, `name`, `author`, `keywords`, `date`, `content_type`, `content_length`, `language`.
   */
  properties?: string[]
  /**
   * The field that will hold the attachment information.
   * @server_default attachment
   */
  target_field?: Field
  /**
   * If true, the binary field will be removed from the document
   * @server_default false
   */
  remove_binary?: boolean
  /**
   * Field containing the name of the resource to decode.
   * If specified, the processor passes this resource name to the underlying Tika library to enable Resource Name Based Detection.
   */
  resource_name?: string
}

export class GeoGridProcessor extends ProcessorBase {
  /**
   * The field to interpret as a geo-tile.=
   * The field format is determined by the `tile_type`.
   */
  field: string
  /**
   * Three tile formats are understood: geohash, geotile and geohex.
   */
  tile_type: GeoGridTileType
  /**
   * The field to assign the polygon shape to, by default, the `field` is updated in-place.
   * @server_default field
   */
  target_field?: Field
  /**
   * If specified and a parent tile exists, save that tile address to this field.
   */
  parent_field?: Field
  /**
   * If specified and children tiles exist, save those tile addresses to this field as an array of strings.
   */
  children_field?: Field
  /**
   * If specified and intersecting non-child tiles exist, save their addresses to this field as an array of strings.
   */
  non_children_field?: Field
  /**
   * If specified, save the tile precision (zoom) as an integer to this field.
   */
  precision_field?: Field
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * Which format to save the generated polygon in.
   * @server_default geojson
   */
  target_format?: GeoGridTargetFormat
}

export enum GeoGridTileType {
  geotile,
  geohex,
  geohash
}

export enum GeoGridTargetFormat {
  geojson,
  wkt
}

export class GeoIpProcessor extends ProcessorBase {
  /**
   * The database filename referring to a database the module ships with (GeoLite2-City.mmdb, GeoLite2-Country.mmdb, or GeoLite2-ASN.mmdb) or a custom database in the ingest-geoip config directory.
   * @server_default GeoLite2-City.mmdb
   */
  database_file?: string
  /**
   * The field to get the ip address from for the geographical lookup.
   */
  field: Field
  /**
   * If `true`, only the first found geoip data will be returned, even if the field contains an array.
   * @server_default true
   */
  first_only?: boolean
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * Controls what properties are added to the `target_field` based on the geoip lookup.
   */
  properties?: string[]
  /**
   * The field that will hold the geographical information looked up from the MaxMind database.
   * @server_default geoip
   */
  target_field?: Field
  /**
   * If `true` (and if `ingest.geoip.downloader.eager.download` is `false`), the missing database is downloaded when the pipeline is created.
   * Else, the download is triggered by when the pipeline is used as the `default_pipeline` or `final_pipeline` in an index.
   */
  download_database_on_pipeline_creation?: boolean
}

export class IpLocationProcessor extends ProcessorBase {
  /**
   * The database filename referring to a database the module ships with (GeoLite2-City.mmdb, GeoLite2-Country.mmdb, or GeoLite2-ASN.mmdb) or a custom database in the ingest-geoip config directory.
   * @server_default GeoLite2-City.mmdb
   */
  database_file?: string
  /**
   * The field to get the ip address from for the geographical lookup.
   */
  field: Field
  /**
   * If `true`, only the first found IP location data will be returned, even if the field contains an array.
   * @server_default true
   */
  first_only?: boolean
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * Controls what properties are added to the `target_field` based on the IP location lookup.
   */
  properties?: string[]
  /**
   * The field that will hold the geographical information looked up from the MaxMind database.
   * @server_default geoip
   */
  target_field?: Field
  /**
   * If `true` (and if `ingest.geoip.downloader.eager.download` is `false`), the missing database is downloaded when the pipeline is created.
   * Else, the download is triggered by when the pipeline is used as the `default_pipeline` or `final_pipeline` in an index.
   */
  download_database_on_pipeline_creation?: boolean
}

export class UserAgentProcessor extends ProcessorBase {
  /**
   * The field containing the user agent string.
   */
  field: Field
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The name of the file in the `config/ingest-user-agent` directory containing the regular expressions for parsing the user agent string. Both the directory and the file have to be created before starting Elasticsearch. If not specified, ingest-user-agent will use the `regexes.yaml` from uap-core it ships with.
   */
  regex_file?: string
  /**
   * The field that will be filled with the user agent details.
   * @server_default user_agent
   */
  target_field?: Field
  /**
   * Controls what properties are added to `target_field`.
   * @server_default ['name', 'major', 'minor', 'patch', 'build', 'os', 'os_name', 'os_major', 'os_minor', 'device']
   */
  properties?: UserAgentProperty[]
  /**
   * Extracts device type from the user agent string on a best-effort basis.
   * @server_default false
   * @availability stack since=8.9.0 stability=beta
   * @availability serverless
   */
  extract_device_type?: boolean
}

export enum UserAgentProperty {
  name,
  os,
  device,
  original,
  version
}

export class BytesProcessor extends ProcessorBase {
  /**
   * The field to convert.
   */
  field: Field
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The field to assign the converted value to.
   * By default, the field is updated in-place.
   * @server_default field
   */
  target_field?: Field
}

export class CircleProcessor extends ProcessorBase {
  /**
   * The difference between the resulting inscribed distance from center to side and the circle’s radius (measured in meters for `geo_shape`, unit-less for `shape`).
   */
  error_distance: double
  /**
   * The field to interpret as a circle. Either a string in WKT format or a map for GeoJSON.
   */
  field: Field
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * Which field mapping type is to be used when processing the circle: `geo_shape` or `shape`.
   */
  shape_type: ShapeType
  /**
   * The field to assign the polygon shape to
   * By default, the field is updated in-place.
   */
  target_field?: Field
}

export class CommunityIDProcessor extends ProcessorBase {
  /**
   * Field containing the source IP address.
   * @server_default source.ip
   */
  source_ip?: Field
  /**
   * Field containing the source port.
   * @server_default source.port
   */
  source_port?: Field
  /**
   * Field containing the destination IP address.
   * @server_default destination.ip
   */
  destination_ip?: Field
  /**
   * Field containing the destination port.
   * @server_default destination.port
   */
  destination_port?: Field
  /**
   * Field containing the IANA number.
   * @server_default network.iana_number
   */
  iana_number?: Field
  /**
   * Field containing the ICMP type.
   * @server_default icmp.type
   */
  icmp_type?: Field
  /**
   * Field containing the ICMP code.
   * @server_default icmp.code
   */
  icmp_code?: Field
  /**
   * Field containing the transport protocol name or number. Used only when the
   * iana_number field is not present. The following protocol names are currently
   * supported: eigrp, gre, icmp, icmpv6, igmp, ipv6-icmp, ospf, pim, sctp, tcp, udp
   * @server_default network.transport
   */
  transport?: Field
  /**
   * Output field for the community ID.
   * @server_default network.community_id
   */
  target_field?: Field
  /**
   * Seed for the community ID hash. Must be between 0 and 65535 (inclusive). The
   * seed can prevent hash collisions between network domains, such as a staging
   * and production network that use the same addressing scheme.
   * @server_default 0
   */
  seed?: integer
  /**
   * If true and any required fields are missing, the processor quietly exits
   * without modifying the document.
   * @server_default true
   */
  ignore_missing?: boolean
}

export enum ConvertType {
  integer,
  long,
  double,
  float,
  boolean,
  ip,
  string,
  auto
}

export class ConvertProcessor extends ProcessorBase {
  /**
   * The field whose value is to be converted.
   */
  field: Field
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The field to assign the converted value to.
   * By default, the `field` is updated in-place.
   * @server_default field
   */
  target_field?: Field
  /**
   * The type to convert the existing value to.
   */
  type: ConvertType
}

export class CsvProcessor extends ProcessorBase {
  /**
   * Value used to fill empty fields.
   * Empty fields are skipped if this is not provided.
   * An empty field is one with no value (2 consecutive separators) or empty quotes (`""`).
   */
  empty_value?: UserDefinedValue
  /**
   * The field to extract data from.
   */
  field: Field
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   */
  ignore_missing?: boolean
  /**
   * Quote used in CSV, has to be single character string.
   * @server_default "
   */
  quote?: string
  /**
   * Separator used in CSV, has to be single character string.
   * @server_default ,
   */
  separator?: string
  /**
   * The array of fields to assign extracted values to.
   */
  target_fields: Fields
  /**
   * Trim whitespaces in unquoted fields.
   */
  trim?: boolean
}

export class DateIndexNameProcessor extends ProcessorBase {
  /**
   * An array of the expected date formats for parsing dates / timestamps in the document being preprocessed.
   * Can be a java time pattern or one of the following formats: ISO8601, UNIX, UNIX_MS, or TAI64N.
   */
  date_formats: string[]
  /**
   * How to round the date when formatting the date into the index name. Valid values are:
   * `y` (year), `M` (month), `w` (week), `d` (day), `h` (hour), `m` (minute) and `s` (second).
   * Supports template snippets.
   */
  date_rounding: string
  /**
   * The field to get the date or timestamp from.
   */
  field: Field
  /**
   * The format to be used when printing the parsed date into the index name.
   * A valid java time pattern is expected here.
   * Supports template snippets.
   * @server_default yyyy-MM-dd
   */
  index_name_format?: string
  /**
   * A prefix of the index name to be prepended before the printed date.
   * Supports template snippets.
   */
  index_name_prefix?: string
  /**
   * The locale to use when parsing the date from the document being preprocessed, relevant when parsing month names or week days.
   * @server_default ENGLISH
   */
  locale?: string
  /**
   * The timezone to use when parsing the date and when date math index supports resolves expressions into concrete index names.
   * @server_default UTC
   */
  timezone?: string
}

export class DateProcessor extends ProcessorBase {
  /**
   * The field to get the date from.
   */
  field: Field
  /**
   * An array of the expected date formats.
   * Can be a java time pattern or one of the following formats: ISO8601, UNIX, UNIX_MS, or TAI64N.
   */
  formats: string[]
  /**
   * The locale to use when parsing the date, relevant when parsing month names or week days.
   * Supports template snippets.
   * @server_default ENGLISH
   */
  locale?: string
  /**
   * The field that will hold the parsed date.
   * @server_default \@timestamp
   */
  target_field?: Field
  /**
   * The timezone to use when parsing the date.
   * Supports template snippets.
   * @server_default UTC
   */
  timezone?: string
  /**
   * The format to use when writing the date to target_field. Must be a valid
   * java time pattern.
   * @server_default yyyy-MM-dd'T'HH:mm:ss.SSSXXX
   */
  output_format?: string
}

export class DissectProcessor extends ProcessorBase {
  /**
   * The character(s) that separate the appended fields.
   * @server_default ""
   */
  append_separator?: string
  /**
   * The field to dissect.
   */
  field: Field
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The pattern to apply to the field.
   */
  pattern: string
}

export class DotExpanderProcessor extends ProcessorBase {
  /**
   * The field to expand into an object field.
   * If set to `*`, all top-level fields will be expanded.
   */
  field: Field
  /**
   * Controls the behavior when there is already an existing nested object that conflicts with the expanded field.
   * When `false`, the processor will merge conflicts by combining the old and the new values into an array.
   * When `true`, the value from the expanded field will overwrite the existing value.
   * @server_default false
   */
  override?: boolean
  /**
   * The field that contains the field to expand.
   * Only required if the field to expand is part another object field, because the `field` option can only understand leaf fields.
   */
  path?: string
}

export class DropProcessor extends ProcessorBase {}

export class EnrichProcessor extends ProcessorBase {
  /**
   * The field in the input document that matches the policies match_field used to retrieve the enrichment data.
   * Supports template snippets.
   */
  field: Field
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The maximum number of matched documents to include under the configured target field.
   * The `target_field` will be turned into a json array if `max_matches` is higher than 1, otherwise `target_field` will become a json object.
   * In order to avoid documents getting too large, the maximum allowed value is 128.
   * @server_default 1
   */
  max_matches?: integer
  /**
   * If processor will update fields with pre-existing non-null-valued field.
   * When set to `false`, such fields will not be touched.
   * @server_default true
   */
  override?: boolean
  /**
   * The name of the enrich policy to use.
   */
  policy_name: string
  /**
   * A spatial relation operator used to match the geoshape of incoming documents to documents in the enrich index.
   * This option is only used for `geo_match` enrich policy types.
   * @server_default INTERSECTS
   */
  shape_relation?: GeoShapeRelation
  /**
   * Field added to incoming documents to contain enrich data. This field contains both the `match_field` and `enrich_fields` specified in the enrich policy.
   * Supports template snippets.
   */
  target_field: Field
}

export class FailProcessor extends ProcessorBase {
  /**
   * The error message thrown by the processor.
   * Supports template snippets.
   */
  message: string
}

export enum FingerprintDigest {
  md5 = 'MD5',
  sha1 = 'SHA-1',
  sha256 = 'SHA-256',
  sha512 = 'SHA-512',
  murmurHash3 = 'MurmurHash3'
}

export class FingerprintProcessor extends ProcessorBase {
  /**
   * Array of fields to include in the fingerprint. For objects, the processor
   * hashes both the field key and value. For other fields, the processor hashes
   * only the field value.
   */
  fields: Fields
  /**
   * Output field for the fingerprint.
   * @server_default fingerprint
   */
  target_field?: Field
  /**
   * Salt value for the hash function.
   */
  salt?: string
  /**
   * The hash method used to compute the fingerprint. Must be one of MD5, SHA-1,
   * SHA-256, SHA-512, or MurmurHash3.
   * @server_default SHA-1
   */
  method?: FingerprintDigest
  /**
   * If true, the processor ignores any missing fields. If all fields are
   * missing, the processor silently exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
}

export class ForeachProcessor extends ProcessorBase {
  /**
   * Field containing array or object values.
   */
  field: Field
  /**
   * If `true`, the processor silently exits without changing the document if the `field` is `null` or missing.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * Ingest processor to run on each element.
   */
  processor: ProcessorContainer
}

export class GrokProcessor extends ProcessorBase {
  /**
   * Must be disabled or v1. If v1, the processor uses patterns with Elastic
   * Common Schema (ECS) field names.
   * @server_default disabled
   */
  ecs_compatibility?: string
  /**
   * The field to use for grok expression parsing.
   */
  field: Field
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * A map of pattern-name and pattern tuples defining custom patterns to be used by the current processor.
   * Patterns matching existing names will override the pre-existing definition.
   */
  pattern_definitions?: Dictionary<string, string>
  /**
   * An ordered list of grok expression to match and extract named captures with.
   * Returns on the first expression in the list that matches.
   */
  patterns: GrokPattern[]
  /**
   * When `true`, `_ingest._grok_match_index` will be inserted into your matched document’s metadata with the index into the pattern found in `patterns` that matched.
   * @server_default false
   */
  trace_match?: boolean
}

export class GsubProcessor extends ProcessorBase {
  /**
   * The field to apply the replacement to.
   */
  field: Field
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The pattern to be replaced.
   */
  pattern: string
  /**
   * The string to replace the matching patterns with.
   */
  replacement: string
  /**
   * The field to assign the converted value to
   * By default, the `field` is updated in-place.
   * @server_default field
   */
  target_field?: Field
}

export class HtmlStripProcessor extends ProcessorBase {
  /**
   * The string-valued field to remove HTML tags from.
   */
  field: Field
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document,
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The field to assign the converted value to
   * By default, the `field` is updated in-place.
   * @server_default field
   */
  target_field?: Field
}

export class InferenceProcessor extends ProcessorBase {
  /**
   * The ID or alias for the trained model, or the ID of the deployment.
   */
  model_id: Id
  /**
   * Field added to incoming documents to contain results objects.
   * @server_default ml.inference.<processor_tag>
   */
  target_field?: Field
  /**
   * Maps the document field names to the known field names of the model.
   * This mapping takes precedence over any default mappings provided in the model configuration.
   */
  field_map?: Dictionary<Field, UserDefinedValue>
  /**
   * Contains the inference type and its options.
   */
  inference_config?: InferenceConfig

  /**
   * Input fields for inference and output (destination) fields for the inference results.
   * This option is incompatible with the target_field and field_map options.
   */
  input_output?: InputConfig | InputConfig[]

  /**
   * If true and any of the input fields defined in input_ouput are missing
   * then those missing fields are quietly ignored, otherwise a missing field causes a failure.
   * Only applies when using input_output configurations to explicitly list the input fields.
   */
  ignore_missing?: boolean
}

export class InputConfig {
  input_field: string
  output_field: string
}

/**
 * @variants container
 */
export class InferenceConfig {
  /**
   * Regression configuration for inference.
   */
  regression?: InferenceConfigRegression
  /**
   * Classification configuration for inference.
   */
  classification?: InferenceConfigClassification
}

export class InferenceConfigRegression {
  /**
   * The field that is added to incoming documents to contain the inference prediction.
   * @server_default <dependent_variable>_prediction
   */
  results_field?: Field
  /**
   * Specifies the maximum number of feature importance values per document.
   * @server_default 0
   */
  num_top_feature_importance_values?: integer
}

export class InferenceConfigClassification {
  /**
   * Specifies the number of top class predictions to return.
   * @server_default 0
   */
  num_top_classes?: integer
  /**
   * Specifies the maximum number of feature importance values per document.
   * @server_default 0
   */
  num_top_feature_importance_values?: integer
  /**
   * The field that is added to incoming documents to contain the inference prediction.
   * @server_default <dependent_variable>_prediction
   */
  results_field?: Field
  /**
   * Specifies the field to which the top classes are written.
   * @server_default top_classes
   */
  top_classes_results_field?: Field
  /**
   * Specifies the type of the predicted field to write.
   * Valid values are: `string`, `number`, `boolean`.
   */
  prediction_field_type?: string
}

export class JoinProcessor extends ProcessorBase {
  /**
   * Field containing array values to join.
   */
  field: Field
  /**
   * The separator character.
   */
  separator: string
  /**
   * The field to assign the joined value to.
   * By default, the field is updated in-place.
   * @server_default field
   */
  target_field?: Field
}

export class JsonProcessor extends ProcessorBase {
  /**
   * Flag that forces the parsed JSON to be added at the top level of the document.
   * `target_field` must not be set when this option is chosen.
   * @server_default false
   */
  add_to_root?: boolean
  /**
   * When set to `replace`, root fields that conflict with fields from the parsed JSON will be overridden.
   * When set to `merge`, conflicting fields will be merged.
   * Only applicable `if add_to_root` is set to true.
   */
  add_to_root_conflict_strategy?: JsonProcessorConflictStrategy
  /**
   * When set to `true`, the JSON parser will not fail if the JSON contains duplicate keys.
   * Instead, the last encountered value for any duplicate key wins.
   * @server_default false
   */
  allow_duplicate_keys?: boolean
  /**
   * The field to be parsed.
   */
  field: Field
  /**
   * The field that the converted structured object will be written into.
   * Any existing content in this field will be overwritten.
   * @server_default field
   */
  target_field?: Field
}

export enum JsonProcessorConflictStrategy {
  /** Root fields that conflict with fields from the parsed JSON will be overridden. */
  replace,
  /** Conflicting fields will be merged. */
  merge
}

export class KeyValueProcessor extends ProcessorBase {
  /**
   * List of keys to exclude from document.
   */
  exclude_keys?: string[]
  /**
   * The field to be parsed.
   * Supports template snippets.
   */
  field: Field
  /**
   * Regex pattern to use for splitting key-value pairs.
   */
  field_split: string
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * List of keys to filter and insert into document.
   * Defaults to including all keys.
   */
  include_keys?: string[]
  /**
   * Prefix to be added to extracted keys.
   * @server_default null
   */
  prefix?: string
  /**
   * If `true`. strip brackets `()`, `<>`, `[]` as well as quotes `'` and `"` from extracted values.
   * @server_default false
   */
  strip_brackets?: boolean
  /**
   * The field to insert the extracted keys into.
   * Defaults to the root of the document.
   * Supports template snippets.
   */
  target_field?: Field
  /**
   * String of characters to trim from extracted keys.
   */
  trim_key?: string
  /**
   * String of characters to trim from extracted values.
   */
  trim_value?: string
  /**
   * Regex pattern to use for splitting the key from the value within a key-value pair.
   */
  value_split: string
}

export class LowercaseProcessor extends ProcessorBase {
  /**
   * The field to make lowercase.
   */
  field: Field
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The field to assign the converted value to.
   * By default, the field is updated in-place.
   * @server_default field
   */
  target_field?: Field
}

export class NetworkDirectionProcessor extends ProcessorBase {
  /**
   * Field containing the source IP address.
   * @server_default source.ip
   */
  source_ip?: Field
  /**
   * Field containing the destination IP address.
   * @server_default destination.ip
   */
  destination_ip?: Field
  /**
   * Output field for the network direction.
   * @server_default network.direction
   */
  target_field?: Field
  /**
   * List of internal networks. Supports IPv4 and IPv6 addresses and ranges in
   * CIDR notation. Also supports the named ranges listed below. These may be
   * constructed with template snippets. Must specify only one of
   * internal_networks or internal_networks_field.
   */
  internal_networks?: string[]
  /**
   * A field on the given document to read the internal_networks configuration
   * from.
   */
  internal_networks_field?: Field
  /**
   * If true and any required fields are missing, the processor quietly exits
   * without modifying the document.
   * @server_default true
   */
  ignore_missing?: boolean
}

export class PipelineProcessor extends ProcessorBase {
  /**
   * The name of the pipeline to execute.
   * Supports template snippets.
   */
  name: Name
  /**
   * Whether to ignore missing pipelines instead of failing.
   * @server_default false
   */
  ignore_missing_pipeline?: boolean
}

export class RedactProcessor extends ProcessorBase {
  /**
   * The field to be redacted
   */
  field: Field
  /**
   * A list of grok expressions to match and redact named captures with
   */
  patterns: GrokPattern[]
  /*
   * A map of pattern-name and pattern tuples defining custom patterns to be used by the processor.
   * Patterns matching existing names will override the pre-existing definition
   */
  pattern_definitions?: Dictionary<string, string>
  /**
   * Start a redacted section with this token
   * @server_default <
   */
  prefix?: string
  /**
   * End a redacted section with this token
   * @server_default >
   */
  suffix?: string
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * If `true` and the current license does not support running redact processors, then the processor quietly exits without modifying the document
   * @server_default false
   */
  skip_if_unlicensed?: boolean
  /**
   * If `true` then ingest metadata `_ingest._redact._is_redacted` is set to `true` if the document has been redacted
   * @availability stack since=8.16.0
   * @availability serverless
   * @server_default false
   */
  trace_redact?: boolean
}

export class RegisteredDomainProcessor extends ProcessorBase {
  /**
   * Field containing the source FQDN.
   */
  field: Field
  /**
   * Object field containing extracted domain components. If an empty string,
   * the processor adds components to the document’s root.
   */
  target_field?: Field
  /**
   * If true and any required fields are missing, the processor quietly exits
   * without modifying the document.
   * @server_default true
   */
  ignore_missing?: boolean
}

export class RemoveProcessor extends ProcessorBase {
  /**
   * Fields to be removed. Supports template snippets.
   */
  field: Fields
  /**
   * Fields to be kept. When set, all fields other than those specified are removed.
   */
  keep?: Fields
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
}

export class RenameProcessor extends ProcessorBase {
  /**
   * The field to be renamed.
   * Supports template snippets.
   */
  field: Field
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The new name of the field.
   * Supports template snippets.
   */
  target_field: Field
}

export class RerouteProcessor extends ProcessorBase {
  /**
   * A static value for the target. Can’t be set when the dataset or namespace option is set.
   */
  destination?: string
  /**
   * Field references or a static value for the dataset part of the data stream name.
   * In addition to the criteria for index names, cannot contain - and must be no longer than 100 characters.
   * Example values are nginx.access and nginx.error.
   *
   * Supports field references with a mustache-like syntax (denoted as {{double}} or {{{triple}}} curly braces).
   * When resolving field references, the processor replaces invalid characters with _. Uses the <dataset> part
   * of the index name as a fallback if all field references resolve to a null, missing, or non-string value.
   *
   * default {{data_stream.dataset}}
   */
  dataset?: string | string[]
  /**
   * Field references or a static value for the namespace part of the data stream name. See the criteria for
   * index names for allowed characters. Must be no longer than 100 characters.
   *
   * Supports field references with a mustache-like syntax (denoted as {{double}} or {{{triple}}} curly braces).
   * When resolving field references, the processor replaces invalid characters with _. Uses the <namespace> part
   * of the index name as a fallback if all field references resolve to a null, missing, or non-string value.
   *
   * default {{data_stream.namespace}}
   */
  namespace?: string | string[]
}

export class ScriptProcessor extends ProcessorBase {
  /**
   * ID of a stored script.
   * If no `source` is specified, this parameter is required.
   */
  id?: Id
  /**
   * Script language.
   * @server_default painless
   */
  lang?: string
  /**
   * Object containing parameters for the script.
   */
  params?: Dictionary<string, UserDefinedValue>
  /**
   * Inline script.
   * If no `id` is specified, this parameter is required.
   */
  source?: string
}

export class SetProcessor extends ProcessorBase {
  /**
   * The origin field which will be copied to `field`, cannot set `value` simultaneously.
   * Supported data types are `boolean`, `number`, `array`, `object`, `string`, `date`, etc.
   */
  copy_from?: Field
  /**
   * The field to insert, upsert, or update.
   * Supports template snippets.
   */
  field: Field
  /**
   * If `true` and `value` is a template snippet that evaluates to `null` or the empty string, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_empty_value?: boolean
  /**
   * The media type for encoding `value`.
   * Applies only when value is a template snippet.
   * Must be one of `application/json`, `text/plain`, or `application/x-www-form-urlencoded`.
   */
  media_type?: string
  /**
   * If `true` processor will update fields with pre-existing non-null-valued field.
   * When set to `false`, such fields will not be touched.
   * @server_default true
   */
  override?: boolean
  /**
   * The value to be set for the field.
   * Supports template snippets.
   * May specify only one of `value` or `copy_from`.
   */
  value?: UserDefinedValue
}

export class SetSecurityUserProcessor extends ProcessorBase {
  /**
   * The field to store the user information into.
   */
  field: Field
  /**
   * Controls what user related properties are added to the field.
   */
  properties?: string[]
}

export enum ShapeType {
  geo_shape,
  shape
}

export class SortProcessor extends ProcessorBase {
  /**
   * The field to be sorted.
   */
  field: Field
  /**
   * The sort order to use.
   * Accepts `"asc"` or `"desc"`.
   * @server_default asc
   */
  order?: SortOrder
  /**
   * The field to assign the sorted value to.
   * By default, the field is updated in-place.
   */
  target_field?: Field
}

export class SplitProcessor extends ProcessorBase {
  /**
   * The field to split.
   */
  field: Field
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * Preserves empty trailing fields, if any.
   * @server_default false
   */
  preserve_trailing?: boolean
  /**
   * A regex which matches the separator, for example, `,` or `\s+`.
   */
  separator: string
  /**
   * The field to assign the split value to.
   * By default, the field is updated in-place.
   * @server_default field
   */
  target_field?: Field
}

export class TerminateProcessor extends ProcessorBase {}

export class TrimProcessor extends ProcessorBase {
  /**
   * The string-valued field to trim whitespace from.
   */
  field: Field
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The field to assign the trimmed value to.
   * By default, the field is updated in-place.
   * @server_default field
   */
  target_field?: Field
}

export class UppercaseProcessor extends ProcessorBase {
  /**
   * The field to make uppercase.
   */
  field: Field
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The field to assign the converted value to.
   * By default, the field is updated in-place.
   * @server_default field
   */
  target_field?: Field
}

export class UrlDecodeProcessor extends ProcessorBase {
  /**
   * The field to decode.
   */
  field: Field
  /**
   * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * The field to assign the converted value to.
   * By default, the field is updated in-place.
   * @server_default field
   */
  target_field?: Field
}

export class UriPartsProcessor extends ProcessorBase {
  /**
   * Field containing the URI string.
   */
  field: Field
  /**
   * If `true` and `field` does not exist, the processor quietly exits without modifying the document.
   * @server_default false
   */
  ignore_missing?: boolean
  /**
   * If `true`, the processor copies the unparsed URI to `<target_field>.original`.
   * @server_default true
   */
  keep_original?: boolean
  /**
   * If `true`, the processor removes the `field` after parsing the URI string.
   * If parsing fails, the processor does not remove the `field`.
   * @server_default false
   */
  remove_if_successful?: boolean
  /**
   * Output field for the URI object.
   * @server_default url
   */
  target_field?: Field
}
