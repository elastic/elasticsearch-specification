
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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.internal.*;

public class SampleDiversity  implements XContentable<SampleDiversity> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public SampleDiversity setField(Field val) { this._field = val; return this; }


  static final ParseField MAX_DOCS_PER_VALUE = new ParseField("max_docs_per_value");
  private Integer _maxDocsPerValue;
  public Integer getMaxDocsPerValue() { return this._maxDocsPerValue; }
  public SampleDiversity setMaxDocsPerValue(Integer val) { this._maxDocsPerValue = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_maxDocsPerValue != null) {
      builder.field(MAX_DOCS_PER_VALUE.getPreferredName(), _maxDocsPerValue);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SampleDiversity fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SampleDiversity.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SampleDiversity, Void> PARSER =
    new ObjectParser<>(SampleDiversity.class.getName(), false, SampleDiversity::new);

  static {
    PARSER.declareObject(SampleDiversity::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareInt(SampleDiversity::setMaxDocsPerValue, MAX_DOCS_PER_VALUE);
  }

}
