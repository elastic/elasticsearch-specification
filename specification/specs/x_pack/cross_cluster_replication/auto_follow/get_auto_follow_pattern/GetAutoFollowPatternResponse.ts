class GetAutoFollowPatternResponse extends ResponseBase {
  /** @prop_serializer AutoFollowPatternFormatter */
  patterns: Dictionary<string, AutoFollowPattern>;
}
