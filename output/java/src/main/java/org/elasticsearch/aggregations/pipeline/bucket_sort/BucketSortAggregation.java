
package org.elasticsearch.aggregations.pipeline.bucket_sort;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.aggregations.pipeline.*;
import org.elasticsearch.search.search.sort.*;

public class BucketSortAggregation  implements XContentable<BucketSortAggregation> {
  
  static final ParseField FROM = new ParseField("from");
  private Integer _from;
  public Integer getFrom() { return this._from; }
  public BucketSortAggregation setFrom(Integer val) { this._from = val; return this; }


  static final ParseField GAP_POLICY = new ParseField("gap_policy");
  private GapPolicy _gapPolicy;
  public GapPolicy getGapPolicy() { return this._gapPolicy; }
  public BucketSortAggregation setGapPolicy(GapPolicy val) { this._gapPolicy = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public BucketSortAggregation setSize(Integer val) { this._size = val; return this; }


  static final ParseField SORT = new ParseField("sort");
  private List<Sort> _sort;
  public List<Sort> getSort() { return this._sort; }
  public BucketSortAggregation setSort(List<Sort> val) { this._sort = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_from != null) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_gapPolicy != null) {
      builder.field(GAP_POLICY.getPreferredName());
      _gapPolicy.toXContent(builder, params);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public BucketSortAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BucketSortAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BucketSortAggregation, Void> PARSER =
    new ObjectParser<>(BucketSortAggregation.class.getName(), false, BucketSortAggregation::new);

  static {
    PARSER.declareInt(BucketSortAggregation::setFrom, FROM);
    PARSER.declareField(BucketSortAggregation::setGapPolicy, (p, t) -> GapPolicy.PARSER.apply(p), GAP_POLICY, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(BucketSortAggregation::setSize, SIZE);
    PARSER.declareObjectArray(BucketSortAggregation::setSort, (p, t) -> Sort.PARSER.apply(p, t), SORT);
  }

}
