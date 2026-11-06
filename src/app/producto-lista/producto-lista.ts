import { Component, inject, signal } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.html',

})
export class ProductoLista {
  productos= signal<Producto[]>([]);

  private productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

  ngOnInit(){
    // Cargar los prodcutos
    this.obtenerProductos();
  }

  private obtenerProductos(): void{
    this.productoServicio.obtenerProductosLista().subscribe(
      {
        next: (datos)=>{
          this.productos.set(datos);
        },
        error: (error)=>{
          console.error("Error al obtener los productos", error);
        }
      }
    );

  }

  editarProducto(id : number){
    this.enrutador.navigate(['editar-producto',id]);
  }

  eliminarProducto(id: number){
    this.productoServicio.eliminarProducto(id).subscribe({
      next: (datos)=> this.obtenerProductos(),
      error:(errores) => console.log(errores)
    });

  }

}
