
package org.elasticsearch.ingest;

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
import org.elasticsearch.ingest.*;

public class Processor  implements XContentable<Processor> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public Processor setName(String val) { this._name = val; return this; }


  static final ParseField ON_FAILURE = new ParseField("on_failure");
  private List<Processor> _onFailure;
  public List<Processor> getOnFailure() { return this._onFailure; }
  public Processor setOnFailure(List<Processor> val) { this._onFailure = val; return this; }


  static final ParseField IF = new ParseField("if");
  private String _if;
  public String getIf() { return this._if; }
  public Processor setIf(String val) { this._if = val; return this; }


  static final ParseField TAG = new ParseField("tag");
  private String _tag;
  public String getTag() { return this._tag; }
  public Processor setTag(String val) { this._tag = val; return this; }


  static final ParseField IGNORE_FAILURE = new ParseField("ignore_failure");
  private Boolean _ignoreFailure;
  public Boolean getIgnoreFailure() { return this._ignoreFailure; }
  public Processor setIgnoreFailure(Boolean val) { this._ignoreFailure = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_onFailure != null) {
      builder.array(ON_FAILURE.getPreferredName(), _onFailure);
    }
    if (_if != null) {
      builder.field(IF.getPreferredName(), _if);
    }
    if (_tag != null) {
      builder.field(TAG.getPreferredName(), _tag);
    }
    if (_ignoreFailure != null) {
      builder.field(IGNORE_FAILURE.getPreferredName(), _ignoreFailure);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Processor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Processor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Processor, Void> PARSER =
    new ObjectParser<>(Processor.class.getName(), false, Processor::new);

  static {
    PARSER.declareString(Processor::setName, NAME);
    PARSER.declareObjectArray(Processor::setOnFailure, (p, t) -> Processor.PARSER.apply(p, t), ON_FAILURE);
    PARSER.declareString(Processor::setIf, IF);
    PARSER.declareString(Processor::setTag, TAG);
    PARSER.declareBoolean(Processor::setIgnoreFailure, IGNORE_FAILURE);
  }

}
