def decorator(wrappedFunction):
	print('side effect')
	return wrappedFunction

@decorator
def myFunc():
	print('myFunc call')
	return 'original'



result = myFunc()

print(result)

