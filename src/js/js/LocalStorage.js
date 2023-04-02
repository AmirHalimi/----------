const Categories = [
   {
      Id: 1,
      Title: "Frontend",
      Description: "Front Of App",
      CreateDate: "2023-04-02T08:26:06.130Z"
   }
   {
      Id: 2,
      Title: "Backend",
      Description: "Back Of App",
      CreateDate: "2023-07-02T08:26:06.130Z"
   }
]

const Products = [
   {
      Id: 1,
      Title: "Vue js",
      Category: "Frontend",
      Updated: "2023-04-02T08:26:06.130Z"
   }
   {
      Id: 2,
      Title: "React",
      Category: "Frontend",
      Updated: "2023-05-02T08:26:06.130Z"
   }
]

class Storage {
   static GetAllCategories() {
      // Get Categories
      const SavedCategories = JSON.parse(localStorage.getItem("Categories")) || [];
      // Sort Categories
      const SortedCategories = SavedCategories.sort((a , b) => {
         return new Date(a.CreateDate) > new Date(b.CreateDate) ? -1 : 1;
      })
      return SortedCategories;
   }
}