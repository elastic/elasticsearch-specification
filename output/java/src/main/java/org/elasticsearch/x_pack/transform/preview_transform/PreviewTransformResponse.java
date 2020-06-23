
package org.elasticsearch.x_pack.transform.preview_transform;

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
import org.elasticsearch.index_modules.index_settings.*;

public class PreviewTransformResponse<TTransform>  implements XContentable<PreviewTransformResponse<TTransform>> {
  
  static final ParseField PREVIEW = new ParseField("preview");
  private List<TTransform> _preview;
  public List<TTransform> getPreview() { return this._preview; }
  public PreviewTransformResponse<TTransform> setPreview(List<TTransform> val) { this._preview = val; return this; }


  static final ParseField GENERATED_DEST_INDEX = new ParseField("generated_dest_index");
  private IndexState _generatedDestIndex;
  public IndexState getGeneratedDestIndex() { return this._generatedDestIndex; }
  public PreviewTransformResponse<TTransform> setGeneratedDestIndex(IndexState val) { this._generatedDestIndex = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_preview != null) {
      builder.array(PREVIEW.getPreferredName(), _preview);
    }
    if (_generatedDestIndex != null) {
      builder.field(GENERATED_DEST_INDEX.getPreferredName());
      _generatedDestIndex.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PreviewTransformResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PreviewTransformResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PreviewTransformResponse, Void> PARSER =
    new ObjectParser<>(PreviewTransformResponse.class.getName(), false, PreviewTransformResponse::new);

  static {
    PARSER.declareObjectArray(PreviewTransformResponse::setPreview, (p, t) -> TTransform.PARSER.apply(p, t), PREVIEW);
    PARSER.declareObject(PreviewTransformResponse::setGeneratedDestIndex, (p, t) -> IndexState.PARSER.apply(p, t), GENERATED_DEST_INDEX);
  }

}
