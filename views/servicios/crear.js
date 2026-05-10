<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>RS Connect | Nuevo Servicio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #F5F5DC; color: #000080; }
        .card { border: none; border-radius: 15px; }
        .btn-save { background-color: #556B2F; color: white; }
    </style>
                </head>
                <body>
                    <div class="container mt-5">
                        <div class="row justify-content-center">
                            <div class="col-md-6">
                                <div class="card shadow p-4">
                                    <h2 class="text-center mb-4">Publicar Nuevo Servicio</h2>
                                    <form action="/servicios" method="POST">
                    <div class="mb-3">
                        <label class="form-label">Nombre del Servicio</label>
                        <input type="text" name="nombre" class="form-control" required minlength="3">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Empresa</label>
                        <input type="text" name="empresa" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Precio ($)</label>
                        <input type="number" name="precio" class="form-control" required min="1">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">URL de la Imagen (Opcional)</label>
                        <input type="url" name="imagen" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Descripción</label>
                        <textarea name="descripcion" class="form-control" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-success w-100" style="background-color: #556B2F;">Guardar Servicio</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>