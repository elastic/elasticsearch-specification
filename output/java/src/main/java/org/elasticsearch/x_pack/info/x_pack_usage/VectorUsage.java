
package org.elasticsearch.x_pack.info.x_pack_usage;

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
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class VectorUsage extends XPackUsage implements XContentable<VectorUsage> {
  
  static final ParseField DENSE_VECTOR_DIMS_AVG_COUNT = new ParseField("dense_vector_dims_avg_count");
  private int _denseVectorDimsAvgCount;
  private boolean _denseVectorDimsAvgCount$isSet;
  public int getDenseVectorDimsAvgCount() { return this._denseVectorDimsAvgCount; }
  public VectorUsage setDenseVectorDimsAvgCount(int val) {
    this._denseVectorDimsAvgCount = val;
    _denseVectorDimsAvgCount$isSet = true;
    return this;
  }

  static final ParseField DENSE_VECTOR_FIELDS_COUNT = new ParseField("dense_vector_fields_count");
  private int _denseVectorFieldsCount;
  private boolean _denseVectorFieldsCount$isSet;
  public int getDenseVectorFieldsCount() { return this._denseVectorFieldsCount; }
  public VectorUsage setDenseVectorFieldsCount(int val) {
    this._denseVectorFieldsCount = val;
    _denseVectorFieldsCount$isSet = true;
    return this;
  }

  static final ParseField SPARSE_VECTOR_FIELDS_COUNT = new ParseField("sparse_vector_fields_count");
  private int _sparseVectorFieldsCount;
  private boolean _sparseVectorFieldsCount$isSet;
  public int getSparseVectorFieldsCount() { return this._sparseVectorFieldsCount; }
  public VectorUsage setSparseVectorFieldsCount(int val) {
    this._sparseVectorFieldsCount = val;
    _sparseVectorFieldsCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_denseVectorDimsAvgCount$isSet) {
      builder.field(DENSE_VECTOR_DIMS_AVG_COUNT.getPreferredName(), _denseVectorDimsAvgCount);
    }
    if (_denseVectorFieldsCount$isSet) {
      builder.field(DENSE_VECTOR_FIELDS_COUNT.getPreferredName(), _denseVectorFieldsCount);
    }
    if (_sparseVectorFieldsCount$isSet) {
      builder.field(SPARSE_VECTOR_FIELDS_COUNT.getPreferredName(), _sparseVectorFieldsCount);
    }
  }

  @Override
  public VectorUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return VectorUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<VectorUsage, Void> PARSER =
    new ObjectParser<>(VectorUsage.class.getName(), false, VectorUsage::new);

  static {
    PARSER.declareInt(VectorUsage::setDenseVectorDimsAvgCount, DENSE_VECTOR_DIMS_AVG_COUNT);
    PARSER.declareInt(VectorUsage::setDenseVectorFieldsCount, DENSE_VECTOR_FIELDS_COUNT);
    PARSER.declareInt(VectorUsage::setSparseVectorFieldsCount, SPARSE_VECTOR_FIELDS_COUNT);
  }

}
