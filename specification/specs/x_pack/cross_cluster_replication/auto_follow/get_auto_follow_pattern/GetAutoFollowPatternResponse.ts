class GetAutoFollowPatternResponse extends ResponseBase implements IResponse {
	@prop_serializer("AutoFollowPatternFormatter")
	patterns: Dictionary<string, AutoFollowPattern>;
}
