class CallCenter()
{
	int numberOfFreeFreshers;
	int numberOfFreshers;
	boolean productManagerFree;
	boolean teamLeadFree;
	public CallCenter(int numberOfFreshers)
	{
		this.numberOfFreshers = numberOfFreshers;
		this.numberOfFreeFreshers = numberOfFreshers;
		productManagerFree = true;
		teamLeadFree = true;
	}

	public void getCallHandler()
	{
		if(numberOfFreeFreshers > 0)
			numberOfFreeFreshers --;
		else if(productManagerFree)
			productManagerFree = false;
		else 
			teamLeadFree = false;
	}
}