class AnomalyCause {
  actual: double[];
  by_field_name: string;
  by_field_value: string;
  correlated_by_field_value: string;
  field_name: string;
  function: string;
  function_description: string;
  influencers: Influence[];
  over_field_name: string;
  over_field_value: string;
  partition_field_name: string;
  partition_field_value: string;
  probability: double;
  typical: double[];
}
