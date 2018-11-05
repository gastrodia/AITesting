import ptvsd
ptvsd.enable_attach(("0.0.0.0", "8813"))
ptvsd.wait_for_attach() 

print("hello")