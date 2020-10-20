package org.elasticsearch.client.experiments.base;

public interface FromXContent<T> {
  public final static Params EMPTY_PARAMS = new Params();

  public static class Params {
    public boolean lenient;
  }
}
