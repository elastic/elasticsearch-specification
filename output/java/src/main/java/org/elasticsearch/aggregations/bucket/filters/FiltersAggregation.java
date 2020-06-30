
package org.elasticsearch.aggregations.bucket.filters;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class FiltersAggregation  implements XContentable<FiltersAggregation> {
  
  static final ParseField FILTERS = new ParseField("filters");
  private Either<NamedContainer<String, QueryContainer>, List<QueryContainer>> _filters;
  public Either<NamedContainer<String, QueryContainer>, List<QueryContainer>> getFilters() { return this._filters; }
  public FiltersAggregation setFilters(Either<NamedContainer<String, QueryContainer>, List<QueryContainer>> val) { this._filters = val; return this; }


  static final ParseField OTHER_BUCKET = new ParseField("other_bucket");
  private Boolean _otherBucket;
  public Boolean getOtherBucket() { return this._otherBucket; }
  public FiltersAggregation setOtherBucket(Boolean val) { this._otherBucket = val; return this; }


  static final ParseField OTHER_BUCKET_KEY = new ParseField("other_bucket_key");
  private String _otherBucketKey;
  public String getOtherBucketKey() { return this._otherBucketKey; }
  public FiltersAggregation setOtherBucketKey(String val) { this._otherBucketKey = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_filters != null) {
      builder.field(FILTERS.getPreferredName());
      _filters.map(r-> r.toXContent(builder, params), builder::value /* TODO List<QueryContainer> */);
    }
    if (_otherBucket != null) {
      builder.field(OTHER_BUCKET.getPreferredName(), _otherBucket);
    }
    if (_otherBucketKey != null) {
      builder.field(OTHER_BUCKET_KEY.getPreferredName(), _otherBucketKey);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FiltersAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FiltersAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FiltersAggregation, Void> PARSER =
    new ObjectParser<>(FiltersAggregation.class.getName(), false, FiltersAggregation::new);

  static {
    PARSER.declareObject(FiltersAggregation::setFilters, (p, t) ->  new Either<NamedContainer<String, QueryContainer>, List<QueryContainer>>() /* TODO UnionOf */, FILTERS);
    PARSER.declareBoolean(FiltersAggregation::setOtherBucket, OTHER_BUCKET);
    PARSER.declareString(FiltersAggregation::setOtherBucketKey, OTHER_BUCKET_KEY);
  }

}
