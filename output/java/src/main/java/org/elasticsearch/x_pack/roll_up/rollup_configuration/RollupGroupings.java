
package org.elasticsearch.x_pack.roll_up.rollup_configuration;

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
import org.elasticsearch.x_pack.roll_up.rollup_configuration.*;

public class RollupGroupings  implements XContentable<RollupGroupings> {
  
  static final ParseField DATE_HISTOGRAM = new ParseField("date_histogram");
  private DateHistogramRollupGrouping _dateHistogram;
  public DateHistogramRollupGrouping getDateHistogram() { return this._dateHistogram; }
  public RollupGroupings setDateHistogram(DateHistogramRollupGrouping val) { this._dateHistogram = val; return this; }


  static final ParseField HISTOGRAM = new ParseField("histogram");
  private HistogramRollupGrouping _histogram;
  public HistogramRollupGrouping getHistogram() { return this._histogram; }
  public RollupGroupings setHistogram(HistogramRollupGrouping val) { this._histogram = val; return this; }


  static final ParseField TERMS = new ParseField("terms");
  private TermsRollupGrouping _terms;
  public TermsRollupGrouping getTerms() { return this._terms; }
  public RollupGroupings setTerms(TermsRollupGrouping val) { this._terms = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_dateHistogram != null) {
      builder.field(DATE_HISTOGRAM.getPreferredName());
      _dateHistogram.toXContent(builder, params);
    }
    if (_histogram != null) {
      builder.field(HISTOGRAM.getPreferredName());
      _histogram.toXContent(builder, params);
    }
    if (_terms != null) {
      builder.field(TERMS.getPreferredName());
      _terms.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RollupGroupings fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupGroupings.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupGroupings, Void> PARSER =
    new ObjectParser<>(RollupGroupings.class.getName(), false, RollupGroupings::new);

  static {
    PARSER.declareObject(RollupGroupings::setDateHistogram, (p, t) -> DateHistogramRollupGrouping.PARSER.apply(p, t), DATE_HISTOGRAM);
    PARSER.declareObject(RollupGroupings::setHistogram, (p, t) -> HistogramRollupGrouping.PARSER.apply(p, t), HISTOGRAM);
    PARSER.declareObject(RollupGroupings::setTerms, (p, t) -> TermsRollupGrouping.PARSER.apply(p, t), TERMS);
  }

}
