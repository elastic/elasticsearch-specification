
package org.elasticsearch.document.multiple.multi_term_vectors;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.document.single.term_vectors.*;
import org.elasticsearch.common_abstractions.response.*;

public class MultiTermVectorsResponse extends ResponseBase<MultiTermVectorsResponse> implements XContentable<MultiTermVectorsResponse> {
  
  static final ParseField DOCS = new ParseField("docs");
  private List<TermVectorsResult> _docs;
  public List<TermVectorsResult> getDocs() { return this._docs; }
  public MultiTermVectorsResponse setDocs(List<TermVectorsResult> val) { this._docs = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_docs != null) {
      builder.array(DOCS.getPreferredName(), _docs);
    }
  }

  @Override
  public MultiTermVectorsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiTermVectorsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiTermVectorsResponse, Void> PARSER =
    new ObjectParser<>(MultiTermVectorsResponse.class.getName(), false, MultiTermVectorsResponse::new);

  static {
    PARSER.declareObjectArray(MultiTermVectorsResponse::setDocs, (p, t) -> TermVectorsResult.PARSER.apply(p, t), DOCS);
  }

}
