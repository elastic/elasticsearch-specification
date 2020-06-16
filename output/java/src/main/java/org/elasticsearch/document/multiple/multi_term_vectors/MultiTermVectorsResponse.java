
package org.elasticsearch.document.multiple.multi_term_vectors;

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
import org.elasticsearch.document.single.term_vectors.*;

public class MultiTermVectorsResponse  implements XContentable<MultiTermVectorsResponse> {
  
  static final ParseField DOCS = new ParseField("docs");
  private List<TermVectors> _docs;
  public List<TermVectors> getDocs() { return this._docs; }
  public MultiTermVectorsResponse setDocs(List<TermVectors> val) { this._docs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_docs != null) {
      builder.array(DOCS.getPreferredName(), _docs);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MultiTermVectorsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiTermVectorsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiTermVectorsResponse, Void> PARSER =
    new ObjectParser<>(MultiTermVectorsResponse.class.getName(), false, MultiTermVectorsResponse::new);

  static {
    PARSER.declareObjectArray(MultiTermVectorsResponse::setDocs, (p, t) -> TermVectors.PARSER.apply(p, t), DOCS);
  }

}
