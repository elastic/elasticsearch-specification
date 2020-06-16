
package org.elasticsearch.x_pack.watcher.input;

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
import org.elasticsearch.x_pack.watcher.input.*;

public class ChainInput  implements XContentable<ChainInput> {
  
  static final ParseField INPUTS = new ParseField("inputs");
  private NamedContainer<String, InputContainer> _inputs;
  public NamedContainer<String, InputContainer> getInputs() { return this._inputs; }
  public ChainInput setInputs(NamedContainer<String, InputContainer> val) { this._inputs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_inputs != null) {
      builder.field(INPUTS.getPreferredName());
      _inputs.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ChainInput fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ChainInput.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ChainInput, Void> PARSER =
    new ObjectParser<>(ChainInput.class.getName(), false, ChainInput::new);

  static {
    PARSER.declareObject(ChainInput::setInputs, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> InputContainer.PARSER.apply(pp, null)), INPUTS);
  }

}
