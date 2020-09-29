
package org.elasticsearch.ingest;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.ingest.*;

public class ProcessorBase  implements XContentable<ProcessorBase> {
  
  static final ParseField IF = new ParseField("if");
  private String _if;
  public String getIf() { return this._if; }
  public ProcessorBase setIf(String val) { this._if = val; return this; }

  static final ParseField IGNORE_FAILURE = new ParseField("ignore_failure");
  private Boolean _ignoreFailure;
  public Boolean getIgnoreFailure() { return this._ignoreFailure; }
  public ProcessorBase setIgnoreFailure(Boolean val) { this._ignoreFailure = val; return this; }

  static final ParseField ON_FAILURE = new ParseField("on_failure");
  private List<ProcessorContainer> _onFailure;
  public List<ProcessorContainer> getOnFailure() { return this._onFailure; }
  public ProcessorBase setOnFailure(List<ProcessorContainer> val) { this._onFailure = val; return this; }

  static final ParseField TAG = new ParseField("tag");
  private String _tag;
  public String getTag() { return this._tag; }
  public ProcessorBase setTag(String val) { this._tag = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_if != null) {
      builder.field(IF.getPreferredName(), _if);
    }
    if (_ignoreFailure != null) {
      builder.field(IGNORE_FAILURE.getPreferredName(), _ignoreFailure);
    }
    if (_onFailure != null) {
      builder.array(ON_FAILURE.getPreferredName(), _onFailure);
    }
    if (_tag != null) {
      builder.field(TAG.getPreferredName(), _tag);
    }
  }

  @Override
  public ProcessorBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ProcessorBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ProcessorBase, Void> PARSER =
    new ObjectParser<>(ProcessorBase.class.getName(), false, ProcessorBase::new);

  static {
    PARSER.declareString(ProcessorBase::setIf, IF);
    PARSER.declareBoolean(ProcessorBase::setIgnoreFailure, IGNORE_FAILURE);
    PARSER.declareObjectArray(ProcessorBase::setOnFailure, (p, t) -> ProcessorContainer.PARSER.apply(p, t), ON_FAILURE);
    PARSER.declareString(ProcessorBase::setTag, TAG);
  }

}
