
package org.elasticsearch.x_pack.graph.explore.request;

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
import org.elasticsearch.x_pack.graph.explore.request.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;

public class GraphExploreControls  implements XContentable<GraphExploreControls> {
  
  static final ParseField SAMPLE_DIVERSITY = new ParseField("sample_diversity");
  private SampleDiversity _sampleDiversity;
  public SampleDiversity getSampleDiversity() { return this._sampleDiversity; }
  public GraphExploreControls setSampleDiversity(SampleDiversity val) { this._sampleDiversity = val; return this; }


  static final ParseField SAMPLE_SIZE = new ParseField("sample_size");
  private Integer _sampleSize;
  public Integer getSampleSize() { return this._sampleSize; }
  public GraphExploreControls setSampleSize(Integer val) { this._sampleSize = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public GraphExploreControls setTimeout(Time val) { this._timeout = val; return this; }


  static final ParseField USE_SIGNIFICANCE = new ParseField("use_significance");
  private Boolean _useSignificance;
  public Boolean getUseSignificance() { return this._useSignificance; }
  public GraphExploreControls setUseSignificance(Boolean val) { this._useSignificance = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_sampleDiversity != null) {
      builder.field(SAMPLE_DIVERSITY.getPreferredName());
      _sampleDiversity.toXContent(builder, params);
    }
    if (_sampleSize != null) {
      builder.field(SAMPLE_SIZE.getPreferredName(), _sampleSize);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    if (_useSignificance != null) {
      builder.field(USE_SIGNIFICANCE.getPreferredName(), _useSignificance);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GraphExploreControls fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GraphExploreControls.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GraphExploreControls, Void> PARSER =
    new ObjectParser<>(GraphExploreControls.class.getName(), false, GraphExploreControls::new);

  static {
    PARSER.declareObject(GraphExploreControls::setSampleDiversity, (p, t) -> SampleDiversity.PARSER.apply(p, t), SAMPLE_DIVERSITY);
    PARSER.declareInt(GraphExploreControls::setSampleSize, SAMPLE_SIZE);
    PARSER.declareObject(GraphExploreControls::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
    PARSER.declareBoolean(GraphExploreControls::setUseSignificance, USE_SIGNIFICANCE);
  }

}
