
/**namespace:Search.Percolator.RegisterPercolator */
/**custom_serialization*/
interface RegisterPercolatorRequest extends Request {
	Metadata: Map<string, any>;
	Query: QueryContainer;
}