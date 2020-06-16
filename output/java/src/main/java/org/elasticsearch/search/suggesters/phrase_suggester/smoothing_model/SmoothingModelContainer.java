
package org.elasticsearch.search.suggesters.phrase_suggester.smoothing_model;

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
import org.elasticsearch.search.suggesters.phrase_suggester.smoothing_model.*;

public class SmoothingModelContainer  implements XContentable<SmoothingModelContainer> {
  
  static final ParseField LAPLACE = new ParseField("laplace");
  private LaplaceSmoothingModel _laplace;
  public LaplaceSmoothingModel getLaplace() { return this._laplace; }
  public SmoothingModelContainer setLaplace(LaplaceSmoothingModel val) { this._laplace = val; return this; }


  static final ParseField LINEAR_INTERPOLATION = new ParseField("linear_interpolation");
  private LinearInterpolationSmoothingModel _linearInterpolation;
  public LinearInterpolationSmoothingModel getLinearInterpolation() { return this._linearInterpolation; }
  public SmoothingModelContainer setLinearInterpolation(LinearInterpolationSmoothingModel val) { this._linearInterpolation = val; return this; }


  static final ParseField STUPID_BACKOFF = new ParseField("stupid_backoff");
  private StupidBackoffSmoothingModel _stupidBackoff;
  public StupidBackoffSmoothingModel getStupidBackoff() { return this._stupidBackoff; }
  public SmoothingModelContainer setStupidBackoff(StupidBackoffSmoothingModel val) { this._stupidBackoff = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_laplace != null) {
      builder.field(LAPLACE.getPreferredName());
      _laplace.toXContent(builder, params);
    }
    if (_linearInterpolation != null) {
      builder.field(LINEAR_INTERPOLATION.getPreferredName());
      _linearInterpolation.toXContent(builder, params);
    }
    if (_stupidBackoff != null) {
      builder.field(STUPID_BACKOFF.getPreferredName());
      _stupidBackoff.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SmoothingModelContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SmoothingModelContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SmoothingModelContainer, Void> PARSER =
    new ObjectParser<>(SmoothingModelContainer.class.getName(), false, SmoothingModelContainer::new);

  static {
    PARSER.declareObject(SmoothingModelContainer::setLaplace, (p, t) -> LaplaceSmoothingModel.PARSER.apply(p, t), LAPLACE);
    PARSER.declareObject(SmoothingModelContainer::setLinearInterpolation, (p, t) -> LinearInterpolationSmoothingModel.PARSER.apply(p, t), LINEAR_INTERPOLATION);
    PARSER.declareObject(SmoothingModelContainer::setStupidBackoff, (p, t) -> StupidBackoffSmoothingModel.PARSER.apply(p, t), STUPID_BACKOFF);
  }

}
