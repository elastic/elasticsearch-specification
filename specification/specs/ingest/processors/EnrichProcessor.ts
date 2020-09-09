class EnrichProcessor extends ProcessorBase {
  field: Field;
  ignore_missing: boolean;
  max_matches: integer;
  override: boolean;
  policy_name: string;
  shape_relation: GeoShapeRelation;
  target_field: Field;
}
