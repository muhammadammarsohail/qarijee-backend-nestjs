import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../entities/course.entity';
import { Admin } from '../entities/admin.entity';
import { CourseEnum } from '../enum/courseEnum';
import { Gender } from '../enum/enums';

@Injectable()
export class DatabaseSeeder {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async seed() {
    await this.seedCourses();
    await this.seedAdmin();
    console.log('Database seeding completed!');
  }

  private async seedCourses() {
    const existingCourses = await this.courseRepository.find();
    if (existingCourses.length > 0) {
      console.log('Courses already seeded, skipping...');
      return;
    }

    const courses = [
      {
        name: CourseEnum.tajweed,
        description: "I am a course",
        books: [
          {
            name: 'Noorani Quaida',
            link: 'console.firebase.com/qarijee/books/nooraniquaida',
            thumbnail: 'https://olipdf.com/wp-content/uploads/2021/06/noorani-qaida-869.webp'
          },
          {
            name: "Holy Quran",
            link: 'console.firebase.com/qarijee/books/holyquran',
            thumbnail: 'https://5.imimg.com/data5/YV/LG/MY-45930635/holy-quran-books-500x500.jpg'
          }
        ]
      },
      {
        name: CourseEnum.hifz,
        description: "I am a course",
        books: [
          {
            name: "Holy Quran",
            link: 'console.firebase.com/qarijee/books/holyquran',
            thumbnail: 'https://5.imimg.com/data5/YV/LG/MY-45930635/holy-quran-books-500x500.jpg'
          }
        ]
      },
      {
        name: CourseEnum.qiraat,
        description: "I am a course",
        books: [
          {
            name: "Holy Quran",
            link: 'console.firebase.com/qarijee/books/holyquran',
            thumbnail: 'https://5.imimg.com/data5/YV/LG/MY-45930635/holy-quran-books-500x500.jpg'
          },
          {
            name: "Saut-ul-Quran",
            link: 'console.firebase.com/books/sautulquran',
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSychO5HnCVDF-oftg4iGt_jApZdjf8ZDe1wA&usqp=CAU'
          }
        ]
      },
      {
        name: CourseEnum.tafseer,
        description: "I am a course",
        books: [
          {
            name: "Muaarif-ul-Quran",
            link: 'console.firebase.com/qarijee/books/muaarifulquran',
            thumbnail: 'https://idara.com/wp-content/uploads/2021/07/maariful_quran_urdu_Faisal_1.jpg'
          },
          {
            name: "Asan Tarjuma-e-Quran",
            link: 'console.firebase.com/qarijee/books/asantarjumaequran',
            thumbnail: 'https://bookcorner.nyc3.digitaloceanspaces.com/uploads/original/5ec366610e03c1589864033.jpg'
          }
        ]
      },
      {
        name: CourseEnum.hadees,
        description: "I am a course",
        books: [
          {
            name: 'Sahih Bukhari Vol 1',
            link: 'console.firebase.com/qarijee/books/sahihbukharivol1',
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxzjzUXvnRm10hpB_8zTry-1QXVJ-zpRjf6ickcnVQE6iQfQ2YIPFj0IfI-lh4yTMluw&usqp=CAU'
          },
          {
            name: "Sahih Bukhari Vol 2",
            link: 'console.firebase.com/qarijee/books/sahihbukharivol2',
            thumbnail: 'https://is2-ssl.mzstatic.com/image/thumb/Purple49/v4/0e/7f/94/0e7f948e-e1d0-2ad5-6ede-0f0b3004f745/source/512x512bb.jpg'
          },
          {
            name: "Sahih Bukhari Vol 3",
            link: 'console.firebase.com/qarijee/books/sahihbukharivol3',
            thumbnail: 'https://pdfbooksfree.pk/wp-content/uploads/2011/10/Sahih-Bukhari-Urdu-8-volumes-complete-pdf-1280x720.jpg'
          }
        ]
      }
    ];

    for (const courseData of courses) {
      const course = this.courseRepository.create(courseData);
      await this.courseRepository.save(course);
    }

    console.log('Courses seeded successfully!');
  }

  private async seedAdmin() {
    const existingAdmin = await this.adminRepository.findOne({
      where: { email: 'admin@qarijee.com' }
    });

    if (existingAdmin) {
      console.log('Admin already seeded, skipping...');
      return;
    }

    const admin = this.adminRepository.create({
      email: 'admin@qarijee.com',
      name: 'admin',
      jwt: '2aasdddmm1ii#nn$@@fqq6aa5r4i%j5e4e#.$c^o6mey45453$#%#5t2as@#$we5f4lk@#65f65w2!214#$%',
      age: 30,
      gender: Gender.male,
      country: 'Pakistan',
      city: 'Islamabad'
    });

    await this.adminRepository.save(admin);
    console.log('Admin seeded successfully!');
  }
} 