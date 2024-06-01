import { useForm } from 'react-hook-form'
import { z } from 'zod'
import "./form.css"
import Painscale from './painscale'


export const FormSchema = z.object({
  weightLoss: z.string().nonempty("This field can't be empty"),
  fever: z.string().nonempty("This field can't be empty"),
  cough: z.string().nonempty("This field can't be empty"),
  pain: z.coerce.number().min(0).max(10)
})

export default function Form() {

   const { register, reset, handleSubmit, formState: { errors } } = useForm<z.infer<typeof FormSchema>>({
    mode: "onSubmit",
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='radio-container'>
        <div>
          <p><strong>you experienced any of the following symptoms</strong></p>
          <p className='center'><strong>Yes</strong></p>
          <p className='center'><strong>No</strong></p>
        </div>
        <div>
          <div>
            <p>Unexplained weight loss for more than 3 weeks</p>
          </div>
          <div>
            <input type='radio' {...register("weightLoss")} value='yes' />
          </div>
          <div>
            <input type='radio' {...register("weightLoss")} value='no' />
          </div>
        </div>
        <div>
          <div>
            <p>Fever for more than three days</p>
          </div>
          <div>
            <input type='radio' {...register("fever")} value='yes' />
          </div>
          <div>
            <input type='radio' {...register("fever")} value='no' />
          </div>
        </div>
        <div>
          <div>
            <p>Productive cough for more than 3 weeks</p>
          </div>
          <div>
            <input type='radio' {...register("cough")} value='yes' />
          </div>
          <div>
            <input type='radio' {...register("cough")} value='no' />
          </div>
        </div>
        <div>
          <div>
            <p>On a scale of 0-10, what is your pain level?</p>
          </div>
          <Painscale register={register} />
        </div>
      </div>
    </form>
  );
}

