
package org.elasticsearch.search.suggesters.phrase_suggester.smoothing_model;

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

public class LinearInterpolationSmoothingModel  implements XContentable<LinearInterpolationSmoothingModel> {
  
  static final ParseField BIGRAM_LAMBDA = new ParseField("bigram_lambda");
  private double _bigramLambda;
  private boolean _bigramLambda$isSet;
  public double getBigramLambda() { return this._bigramLambda; }
  public LinearInterpolationSmoothingModel setBigramLambda(double val) {
    this._bigramLambda = val;
    _bigramLambda$isSet = true;
    return this;
  }

  static final ParseField TRIGRAM_LAMBDA = new ParseField("trigram_lambda");
  private double _trigramLambda;
  private boolean _trigramLambda$isSet;
  public double getTrigramLambda() { return this._trigramLambda; }
  public LinearInterpolationSmoothingModel setTrigramLambda(double val) {
    this._trigramLambda = val;
    _trigramLambda$isSet = true;
    return this;
  }

  static final ParseField UNIGRAM_LAMBDA = new ParseField("unigram_lambda");
  private double _unigramLambda;
  private boolean _unigramLambda$isSet;
  public double getUnigramLambda() { return this._unigramLambda; }
  public LinearInterpolationSmoothingModel setUnigramLambda(double val) {
    this._unigramLambda = val;
    _unigramLambda$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_bigramLambda$isSet) {
      builder.field(BIGRAM_LAMBDA.getPreferredName(), _bigramLambda);
    }
    if (_trigramLambda$isSet) {
      builder.field(TRIGRAM_LAMBDA.getPreferredName(), _trigramLambda);
    }
    if (_unigramLambda$isSet) {
      builder.field(UNIGRAM_LAMBDA.getPreferredName(), _unigramLambda);
    }
  }

  @Override
  public LinearInterpolationSmoothingModel fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LinearInterpolationSmoothingModel.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LinearInterpolationSmoothingModel, Void> PARSER =
    new ObjectParser<>(LinearInterpolationSmoothingModel.class.getName(), false, LinearInterpolationSmoothingModel::new);

  static {
    PARSER.declareDouble(LinearInterpolationSmoothingModel::setBigramLambda, BIGRAM_LAMBDA);
    PARSER.declareDouble(LinearInterpolationSmoothingModel::setTrigramLambda, TRIGRAM_LAMBDA);
    PARSER.declareDouble(LinearInterpolationSmoothingModel::setUnigramLambda, UNIGRAM_LAMBDA);
  }

}
