
package org.elasticsearch.cluster.nodes_stats;

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
import org.elasticsearch.cluster.nodes_stats.*;

public class ExtendedMemoryStats extends MemoryStats implements XContentable<ExtendedMemoryStats> {
  
  static final ParseField FREE_PERCENT = new ParseField("free_percent");
  private int _freePercent;
  private boolean _freePercent$isSet;
  public int getFreePercent() { return this._freePercent; }
  public ExtendedMemoryStats setFreePercent(int val) {
    this._freePercent = val;
    _freePercent$isSet = true;
    return this;
  }

  static final ParseField USED_PERCENT = new ParseField("used_percent");
  private int _usedPercent;
  private boolean _usedPercent$isSet;
  public int getUsedPercent() { return this._usedPercent; }
  public ExtendedMemoryStats setUsedPercent(int val) {
    this._usedPercent = val;
    _usedPercent$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_freePercent$isSet) {
      builder.field(FREE_PERCENT.getPreferredName(), _freePercent);
    }
    if (_usedPercent$isSet) {
      builder.field(USED_PERCENT.getPreferredName(), _usedPercent);
    }
  }

  @Override
  public ExtendedMemoryStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExtendedMemoryStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExtendedMemoryStats, Void> PARSER =
    new ObjectParser<>(ExtendedMemoryStats.class.getName(), false, ExtendedMemoryStats::new);

  static {
    PARSER.declareInt(ExtendedMemoryStats::setFreePercent, FREE_PERCENT);
    PARSER.declareInt(ExtendedMemoryStats::setUsedPercent, USED_PERCENT);
  }

}
