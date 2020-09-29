
package org.elasticsearch.aggregations.pipeline.bucket_sort;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.aggregations.pipeline.*;
import org.elasticsearch.search.search.sort.*;

public class BucketSortAggregation  implements XContentable<BucketSortAggregation> {
  
  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public BucketSortAggregation setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField GAP_POLICY = new ParseField("gap_policy");
  private GapPolicy _gapPolicy;
  public GapPolicy getGapPolicy() { return this._gapPolicy; }
  public BucketSortAggregation setGapPolicy(GapPolicy val) { this._gapPolicy = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public BucketSortAggregation setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField SORT = new ParseField("sort");
  private List<Sort> _sort;
  public List<Sort> getSort() { return this._sort; }
  public BucketSortAggregation setSort(List<Sort> val) { this._sort = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_from$isSet) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_gapPolicy != null) {
      builder.field(GAP_POLICY.getPreferredName());
      _gapPolicy.toXContent(builder, params);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
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
