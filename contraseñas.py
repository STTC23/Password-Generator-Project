import string
import secrets
import random 
longitud = 12 
caracteres = string.ascii_letters + string.digits + string.punctuation
contraseña = []
contraseña.append (random.choice(string.ascii_lowercase))
contraseña.append (random.choice(string.digits))
contraseña.append (random.choice(string.punctuation))
while len(contraseña) < longitud:
    contraseña.append(secrets.choice(caracteres))
random.shuffle (contraseña)
contraseña = "".join (contraseña)
print("tu contraseña es:",contraseña)
