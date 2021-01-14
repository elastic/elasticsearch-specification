/**
 * @type_stability stable
 */
class UpdateResponse<TDocument> extends WriteResponseBase {
  get?: InlineGet<TDocument>;
}
