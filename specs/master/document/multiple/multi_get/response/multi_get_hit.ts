
/**namespace:Document.Multiple.MultiGet.Response */
interface MultiGetHit<T> {
	Source: T;
	Index: string;
	Found: boolean;
	Type: string;
	Version: long;
	Id: string;
}