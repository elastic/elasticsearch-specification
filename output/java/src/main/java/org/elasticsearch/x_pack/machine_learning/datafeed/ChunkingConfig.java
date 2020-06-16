
package org.elasticsearch.x_pack.machine_learning.datafeed;

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
import org.elasticsearch.x_pack.machine_learning.datafeed.*;
import org.elasticsearch.common_options.time_unit.*;

public class ChunkingConfig  implements XContentable<ChunkingConfig> {
  
  static final ParseField MODE = new ParseField("mode");
  private ChunkingMode _mode;
  public ChunkingMode getMode() { return this._mode; }
  public ChunkingConfig setMode(ChunkingMode val) { this._mode = val; return this; }


  static final ParseField TIME_SPAN = new ParseField("time_span");
  private Time _timeSpan;
  public Time getTimeSpan() { return this._timeSpan; }
  public ChunkingConfig setTimeSpan(Time val) { this._timeSpan = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_mode != null) {
      builder.field(MODE.getPreferredName());
      _mode.toXContent(builder, params);
    }
    if (_timeSpan != null) {
      builder.field(TIME_SPAN.getPreferredName());
      _timeSpan.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ChunkingConfig fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ChunkingConfig.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ChunkingConfig, Void> PARSER =
    new ObjectParser<>(ChunkingConfig.class.getName(), false, ChunkingConfig::new);

  static {
    PARSER.declareField(ChunkingConfig::setMode, (p, t) -> ChunkingMode.PARSER.apply(p), MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(ChunkingConfig::setTimeSpan, (p, t) -> Time.PARSER.apply(p, t), TIME_SPAN);
  }

}
