class PercentilesAggregation {
  keyed?: boolean;
  percents?: double[];
  field?: Field;
  missing?: Missing;
  hdr?: HdrMethod;
  tdigest?: TDigest;
}

class HdrMethod {
  number_of_significant_value_digits?: integer;
}

class TDigest {
  compression?: integer;
}
