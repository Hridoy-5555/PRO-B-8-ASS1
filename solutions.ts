const DEFAULT_MULTIPLIER: number = 2;

const multiplyValue = (value: number, multiplier?: number): number => {
  return value * (multiplier ?? DEFAULT_MULTIPLIER);
};

const processInput = (value: string | number | boolean): string | number => {

  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }


  if (typeof value === "number") {
    return value * 10;
  }


  return value ? "Active" : "Inactive";
};



const formatCoordinate = (
  coordinate: readonly [number, number, string]

): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce<T[]>((combined: T[], current: T[]): T[] => {
    return combined.concat(current);
  }, []);
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  return courses.filter((course: Course): boolean => {
    return course.isPublished && course.students >= minStudents;
  });
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item: T): T[K] => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve: (value: string) => void, reject: (reason: Error) => void): void => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout((): void => {
      resolve("Access Granted");
    }, 1000);
  });
};



export {
  multiplyValue,
  processInput,
  formatCoordinate,
  concatenateArrays,
  getPopularCourses,
  pluckValues,
  Employee,
  Manager,
  validateAgeAsync,
};
export type { Course };
