INSERT INTO "Producto" (nombre, descripcion, precio, categoria, imagen_principal, calificacion, stock, oferta, descuento, sku, fecha_creacion, activo)
VALUES
('Auriculares Bluetooth Sony', 'Auriculares inalámbricos con cancelación de ruido y 30 horas de batería.', 59.99, 'Electrónica', 'https://m.media-amazon.com/images/I/61rA+1-Za7L._UF1000,1000_QL80_.jpg', 4.5, 100, false, 0.0, 'AUD-SNY-001', '2024-01-01T00:00:00.000Z', true),
('Cafetera Nespresso', 'Cafetera compacta de cápsulas con sistema de calentamiento rápido.', 89.99, 'Hogar', 'https://lh3.googleusercontent.com/d/15zXx4izF2d6ROEce_o3ZYX6Nccubp5v9', 4.0, 90, true, 10.0, 'CAF-NES-002', '2024-01-02T00:00:00.000Z', true),
('Zapatillas Deportivas Nike', 'Zapatillas ligeras para running, disponibles en varios colores.', 120.0, 'Ropa y Calzado', 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/34490c6e-0488-4eb3-ad65-28d3d3dbd866/W+NIKE+AIR+MAX+INTRLK+LITE.png', 3.5, 80, false, 0.0, 'ZAP-NIK-003', '2024-01-03T00:00:00.000Z', true),
('Smartwatch Samsung Galaxy', 'Reloj inteligente con monitor de frecuencia cardíaca y GPS integrado.', 199.99, 'Electrónica', 'https://m.media-amazon.com/images/I/71SZNup1qrL._UF894,1000_QL80_.jpg', 5.0, 70, true, 20.0, 'SWT-SAM-004', '2024-01-04T00:00:00.000Z', true),
('Mochila de Viaje Herschel', 'Mochila resistente con compartimento para laptop y múltiples bolsillos.', 75.0, 'Accesorios', 'https://m.media-amazon.com/images/I/61UY-lhhlOL._UY1000_.jpg', 4.2, 60, false, 0.0, 'MOC-HER-005', '2024-01-05T00:00:00.000Z', true),
('Juego de Ollas Tefal', 'Set de ollas antiadherentes para cocina, incluye 5 piezas.', 110.0, 'Hogar', 'https://m.media-amazon.com/images/I/817TFTQAsvL.jpg', 3.8, 50, true, 15.0, 'OLL-TEF-006', '2024-01-06T00:00:00.000Z', true),
('Gafas de Sol Ray-Ban', 'Gafas de sol clásicas con protección UV 400 y montura metálica.', 150.0, 'Accesorios', 'https://cdn.shopify.com/s/files/1/0035/5991/5629/products/8056597918602_2.jpg', 4.7, 40, false, 0.0, 'GAF-RAY-007', '2024-01-07T00:00:00.000Z', true),
('Tablet Apple iPad', 'Tablet con pantalla Retina de 10.2 pulgadas y chip A13 Bionic.', 329.0, 'Electrónica', 'https://webonline.macstore.mx/img/sku/ipadapp678_FZ.jpg', 4.1, 30, true, 30.0, 'TAB-APP-008', '2024-01-08T00:00:00.000Z', true),
('Monitor LG 27 pulgadas', 'Monitor IPS con resolución QHD y 75Hz de tasa de refresco.', 220.0, 'Electrónica', 'https://m.media-amazon.com/images/I/81lC7hURadL.UF894,1000_QL80.jpg', 3.9, 20, false, 0.0, 'MON-LG-009', '2024-01-09T00:00:00.000Z', true),
('Smart TV Samsung 55"', 'Televisor 4K UHD con HDR y asistentes de voz integrados.', 599.99, 'Electrónica', 'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00750940183307l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 4.6, 10, true, 50.0, 'TV-SAM-010', '2024-01-10T00:00:00.000Z', true);

INSERT INTO "Imagen" (url, orden, productoId) VALUES
('https://m.media-amazon.com/images/I/61MgCvWRlpL._AC_SL1024_.jpg', 0, 1),
('https://lh3.googleusercontent.com/d/15zXx4izF2d6ROEce_o3ZYX6Nccubp5v9', 0, 2),
('https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/34490c6e-0488-4eb3-ad65-28d3d3dbd866/W+NIKE+AIR+MAX+INTRLK+LITE.png', 0, 3),
('https://m.media-amazon.com/images/I/71SZNup1qrL._UF894,1000_QL80_.jpg', 0, 4),
('https://m.media-amazon.com/images/I/61UY-lhhlOL._UY1000_.jpg', 0, 5),
('https://m.media-amazon.com/images/I/817TFTQAsvL.jpg', 0, 6),
('https://cdn.shopify.com/s/files/1/0035/5991/5629/products/8056597918602_2.jpg', 0, 7),
('https://webonline.macstore.mx/img/sku/ipadapp678_FZ.jpg', 0, 8),
('https://m.media-amazon.com/images/I/81lC7hURadL.UF894,1000_QL80.jpg', 0, 9),
('https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00750940183307l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 0, 10);