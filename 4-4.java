public static void LinkedLists(BinaryTree tree)
{
	List<List<Node>> listOfLists = new ArrayList<List<Node>>();
	Queue<Tuple<Node, int>> inOrder = new Queue<Tuple<Node, int>>();
	inOder.enqueue(New Tuple<Node, int>(tree.root, 0));
	while(inOrder.size() > 0)
	{
		Tuple<Node, int> tuple = inOrder.dequeue();
		Node currentNode = tuple.first;
		int depth = tuple.second();
		if(listOfLists.size > depth)
		{
			List<Node> list = listOfLists.get(depth);
			list.add(currentNode);
		}
		else
		{
			List<Node> newList = new ArrayList<Node>();
			newList.add(currentNode);
		}
		if(currentNode.right != null)
			inOrder.append(new Tuple<currentNode.right, depth +1>);
		if(currentNode.left != null)
			inOrder.append(new Tuple<currentNode.left, depth + 1>);
	}
}