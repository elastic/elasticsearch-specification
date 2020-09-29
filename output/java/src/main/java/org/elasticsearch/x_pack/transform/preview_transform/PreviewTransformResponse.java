
package org.elasticsearch.x_pack.transform.preview_transform;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.index_modules.index_settings.*;
import org.elasticsearch.common_abstractions.response.*;

public class PreviewTransformResponse<TTransform> extends ResponseBase<PreviewTransformResponse> implements XContentable<PreviewTransformResponse> {
  
  static final ParseField GENERATED_DEST_INDEX = new ParseField("generated_dest_index");
  private IndexState _generatedDestIndex;
  public IndexState getGeneratedDestIndex() { return this._generatedDestIndex; }
  public PreviewTransformResponse<TTransform> setGeneratedDestIndex(IndexState val) { this._generatedDestIndex = val; return this; }

  static final ParseField PREVIEW = new ParseField("preview");
  private List<TTransform> _preview;
  public List<TTransform> getPreview() { return this._preview; }
  public PreviewTransformResponse<TTransform> setPreview(List<TTransform> val) { this._preview = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_generatedDestIndex != null) {
      builder.field(GENERATED_DEST_INDEX.getPreferredName());
      _generatedDestIndex.toXContent(builder, params);
    }
    if (_preview != null) {
      builder.array(PREVIEW.getPreferredName(), _preview);
    }
  }

  @Override
  public PreviewTransformResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PreviewTransformResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PreviewTransformResponse, Void> PARSER =
    new ObjectParser<>(PreviewTransformResponse.class.getName(), false, PreviewTransformResponse::new);

  static {
    PARSER.declareObject(PreviewTransformResponse::setGeneratedDestIndex, (p, t) -> IndexState.PARSER.apply(p, t), GENERATED_DEST_INDEX);
    PARSER.declareObjectArray(PreviewTransformResponse::setPreview, (p, t) -> TTransform.PARSER.apply(p, t), PREVIEW);
  }

}
