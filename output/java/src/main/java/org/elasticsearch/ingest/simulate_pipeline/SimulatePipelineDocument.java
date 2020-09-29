
package org.elasticsearch.ingest.simulate_pipeline;

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

public class SimulatePipelineDocument  implements XContentable<SimulatePipelineDocument> {
  
  static final ParseField ID = new ParseField("_id");
  private Id _id;
  public Id getId() { return this._id; }
  public SimulatePipelineDocument setId(Id val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("_index");
  private String _index;
  public String getIndex() { return this._index; }
  public SimulatePipelineDocument setIndex(String val) { this._index = val; return this; }

  static final ParseField SOURCE = new ParseField("_source");
  private Object _source;
  public Object getSource() { return this._source; }
  public SimulatePipelineDocument setSource(Object val) { this._source = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
  }

  @Override
  public SimulatePipelineDocument fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SimulatePipelineDocument.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SimulatePipelineDocument, Void> PARSER =
    new ObjectParser<>(SimulatePipelineDocument.class.getName(), false, SimulatePipelineDocument::new);

  static {
    PARSER.declareObject(SimulatePipelineDocument::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareString(SimulatePipelineDocument::setIndex, INDEX);
    PARSER.declareObject(SimulatePipelineDocument::setSource, (p, t) -> p.objectText(), SOURCE);
  }

}
