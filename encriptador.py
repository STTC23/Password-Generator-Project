
import hashlib
import getpass
def encriptar_contraseña(contraseña):
    hash_object = hashlib.sha256()
    hash_object.update(contraseña.encode())
    hash_hex = hash_object.hexdigest()
    return hash_hex
contraseña = getpass.getpass("Ingrese su contraseña: ")
hash_contraseña = encriptar_contraseña(contraseña)

print("La contraseña encriptada es:", hash_contraseña)