
package org.elasticsearch.analysis.analyzers;

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


public class IAnalyzer  implements XContentable<IAnalyzer> {
  
  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public IAnalyzer setType(String val) { this._type = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public IAnalyzer setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IAnalyzer, Void> PARSER =
    new ObjectParser<>(IAnalyzer.class.getName(), false, IAnalyzer::new);

  static {
    PARSER.declareString(IAnalyzer::setType, TYPE);
    PARSER.declareString(IAnalyzer::setVersion, VERSION);
  }

}
