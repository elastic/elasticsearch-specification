
package org.elasticsearch.search.search.hits;

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
import org.elasticsearch.search.search.hits.*;
import org.elasticsearch.internal.*;

public class HitsMetadata<T>  implements XContentable<HitsMetadata<T>> {
  
  static final ParseField HITS = new ParseField("hits");
  private List<Hit<T>> _hits;
  public List<Hit<T>> getHits() { return this._hits; }
  public HitsMetadata<T> setHits(List<Hit<T>> val) { this._hits = val; return this; }


  static final ParseField MAX_SCORE = new ParseField("max_score");
  private Double _maxScore;
  public Double getMaxScore() { return this._maxScore; }
  public HitsMetadata<T> setMaxScore(Double val) { this._maxScore = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private TotalHits _total;
  public TotalHits getTotal() { return this._total; }
  public HitsMetadata<T> setTotal(TotalHits val) { this._total = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_hits != null) {
      builder.array(HITS.getPreferredName(), _hits);
    }
    if (_maxScore != null) {
      builder.field(MAX_SCORE.getPreferredName(), _maxScore);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName());
      _total.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HitsMetadata fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HitsMetadata.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HitsMetadata, Void> PARSER =
    new ObjectParser<>(HitsMetadata.class.getName(), false, HitsMetadata::new);

  static {
    Hit _hits = new Hit<>();
    PARSER.declareObjectArray(HitsMetadata::setHits, (p, t) -> _hits.PARSER.apply(p, t), HITS);
    PARSER.declareDouble(HitsMetadata::setMaxScore, MAX_SCORE);
    PARSER.declareObject(HitsMetadata::setTotal, (p, t) -> TotalHits.PARSER.apply(p, t), TOTAL);
  }

}
