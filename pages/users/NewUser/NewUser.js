import toast from 'react-hot-toast'
import { Check } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import Avatar from '../../components/avatar'
import { Card, CardHeader, CardTitle, CardBody, Button, Label, Input, Form } from 'reactstrap'
import { createUser } from '../../../Services/Api/Panel'

const NewUser = () => {
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    const formattedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      gmail: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
      isStudent: data.isStudent,
      isTeacher: data.isTeacher
    }

    try {
      await createUser(formattedData)
      toast.success('کاربر با موفقیت ایجاد شد 🎉')
      reset()
    } catch (error) {
      toast.error('خطا در ایجاد کاربر')
      console.error(error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>افزودن کاربر</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-1'>
            <Label className='form-label'>نام</Label>
            <Controller
              name='firstName'
              control={control}
              defaultValue=''
              render={({ field }) => <Input {...field} invalid={!!errors.firstName} />}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label'>نام خانوادگی</Label>
            <Controller
              name='lastName'
              control={control}
              defaultValue=''
              render={({ field }) => <Input {...field} invalid={!!errors.lastName} />}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label'>ایمیل</Label>
            <Controller
              name='email'
              control={control}
              defaultValue=''
              render={({ field }) => <Input type='email' {...field} invalid={!!errors.email} />}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label'>رمز عبور</Label>
            <Controller
              name='password'
              control={control}
              defaultValue=''
              render={({ field }) => <Input type='password' {...field} invalid={!!errors.password} />}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label'>شماره تلفن</Label>
            <Controller
              name='phoneNumber'
              control={control}
              defaultValue=''
              render={({ field }) => <Input {...field} invalid={!!errors.phoneNumber} />}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label'>دانش‌آموز هست؟</Label>
            <Controller
              name='isStudent'
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Input type='checkbox' {...field} checked={field.value} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label'>معلم هست؟</Label>
            <Controller
              name='isTeacher'
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Input type='checkbox' {...field} checked={field.value} />
              )}
            />
          </div>

          <div className='d-flex'>
            <Button className='me-1' color='primary' type='submit'>
              ثبت
            </Button>
            <Button outline color='secondary' type='reset' onClick={() => reset()}>
              ریست
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default NewUser
