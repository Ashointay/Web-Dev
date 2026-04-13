# LEVEL 2: FBV (Function-Based Views)
# from .fbv import products_list as ProductListAPIView, product_detail as ProductDetailAPIView


# LEVEL 3: CBV (Class-Based Views) 
# from .cbv import ProductListAPIView, ProductDetailAPIView


# LEVEL 4: Mixins 
# from .mixins import ProductListAPIView, ProductDetailAPIView


# LEVEL 5: Generics 
from .generics import (
    ProductListAPIView, 
    ProductDetailAPIView, 
    CategoryListAPIView, 
    CategoryDetailAPIView, 
    CategoryProductsAPIView
)